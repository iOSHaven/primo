<?php

namespace Database\Seeders\Production;

use App\Models\Link;
use App\Models\Link\Ipa;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use SnowBuilds\Insights\Models\Record;

class StatSeeder extends Seeder
{
    /**
     * The legacy analytics started the week on Sunday, however, the Carbon/Carbon
     * standard starts the week on Monday. As a result, all imported stats are
     * ahead by one day. Look at `created_at` compared to the `date_1` field
     * to calculate the difference in days. This means after deploying to
     * production for the first time, there will be a traffic spike.
     * Launching early in the morning could reduce the effect.
     */
    public function run(): void
    {
        ini_set('memory_limit', -1);

        $dateMap = [];

        $lastStat = Record::orderByDesc('created_at')->first();
        if ($lastSyncedAt = $lastStat?->created_at) {
            $this->command->getOutput()->info('Syncing stats');
            Record::where('created_at', $lastSyncedAt)->delete();
        } else {
            $this->command->getOutput()->info('Fetching all stats! This will take a while.');
        }

        $oldest = now()->createFromFormat('Y-m-d H:i:s', $lastSyncedAt ?? '2019-12-15 00:00:00');
        $date = $oldest->copy()->startOfWeek(Carbon::SUNDAY)->startOfDay();

        for ($i = 0; $i < 500 && $date->lte(now()); $i++, $date->addWeek()) {
            $start = $date->copy();
            for ($j = 0; $j < 7; $j++) {
                $index = $j + 1;
                data_set($dateMap, [$start->timestamp, "date_{$index}"], $start->copy()->addDays($index)->toDateTimeString());
            }
        }

        $query = DB::connection('legacy')->table('stat_buffers')->oldest('id')->where('created_at', '>=', $oldest);
        $output = $this->command->getOutput();
        $progress = $output->progressStart($query->count());

        $ipaLinkIdOffset = Link::orderBy('id', 'desc')->first()?->id ?? 0;
        $query
            ->chunk(2500, function ($models) use ($output, $dateMap, $ipaLinkIdOffset) {
                $inserts = [];
                foreach ($models as $model) {
                    $model = (array) $model;
                    $created_at = now()->createFromFormat('Y-m-d H:i:s', data_get($model, 'created_at'));
                    $ts = $created_at->startOfWeek(Carbon::SUNDAY)->startOfDay();

                    $type = data_get($model, 'target_type');
                    $subType = in_array($type, ['App\\Models\\App', 'App\\App']) ? 'Content' : 'Link';
                    $type = 'App\\Models\\'.$subType.'\\'.str($type)->afterLast('\\')->value();

                    $inserts[] = [
                        ...$dateMap[$ts->timestamp],
                        'created_at' => data_get($model, 'created_at'),
                        'updated_at' => data_get($model, 'updated_at'),
                        'model_type' => $type,
                        'model_id' => $type === Ipa::class ? $ipaLinkIdOffset + data_get($model, 'target_id') : data_get($model, 'target_id'),
                        'type' => data_get($model, 'event') === 'view' ? 'view' : 'download',
                        'amount_1' => data_get($model, 'day_1'),
                        'amount_2' => data_get($model, 'day_2'),
                        'amount_3' => data_get($model, 'day_3'),
                        'amount_4' => data_get($model, 'day_4'),
                        'amount_5' => data_get($model, 'day_5'),
                        'amount_6' => data_get($model, 'day_6'),
                        'amount_7' => data_get($model, 'day_7'),
                    ];
                }
                Record::insertOrIgnore($inserts);
                $output->progressAdvance($models->count());
            });
        $output->progressFinish();
    }
}
