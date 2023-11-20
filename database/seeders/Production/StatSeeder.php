<?php

namespace Database\Seeders\Production;

use App\Models\Link;
use App\Models\Link\Ipa;
use App\Models\Stat;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $query = DB::connection('legacy')->table('stat_buffers')->oldest('id');

        $output = $this->command->getOutput();
        $progress = $output->progressStart($query->count());

        $dateMap = [];

        $oldest = now()->createFromFormat('Y-m-d H:i:s', '2019-12-15 00:00:00');
        $date = $oldest->copy();

        for ($i = 0; $i < 500 && $date->lte(now()); $i++, $date->addWeek(1)) {
            $start = $date->copy()->startOfWeek();
            for ($j = 0; $j < 7; $j++) {
                $index = $j + 1;
                data_set($dateMap, [$date->timestamp, "date_{$index}"], $start->copy()->addDays($j)->toDateTimeString());
            }
        }

        $start = $oldest->copy()->startOfWeek();
        for ($j = 0; $j < 7; $j++) {
            $index = $j + 1;
            data_set($dateMap, [$oldest->timestamp, "date_{$index}"], $start->copy()->addDays($j)->toDateTimeString());
        }

        $ipaLinkIdOffset = Link::orderBy('id', 'desc')->first()?->id ?? 0;
        $query
            ->chunk(250, function ($models) use ($output, $dateMap, $ipaLinkIdOffset) {
                $inserts = [];
                foreach ($models as $model) {
                    $model = (array) $model;
                    $ts = now()->createFromFormat('Y-m-d H:i:s', data_get($model, 'created_at'));
                    // dd($ts, $ts->timestamp);
                    $type = data_get($model, 'target_type');
                    $subType = in_array($type, ['App\\Models\\App', 'App\\App']) ? 'Content' : 'Link';
                    $type = 'App\\Models\\'.$subType.'\\'.str($type)->after('\\')->value();
                    $inserts[] = [
                        ...$dateMap[$ts->timestamp],
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
                Stat::insertOrIgnore($inserts);
                $output->progressAdvance(250);
            });
        $output->progressFinish();
    }
}
