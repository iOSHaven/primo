<?php

namespace Database\Seeders\Production;

use App\Models\Content;
use App\Models\Enum\LinkType;
use App\Models\Link;
use App\Models\Team;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class AppLinkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $query = DB::connection('legacy')->table('itms_provider')
            ->join('itms', 'itms.id', '=', 'itms_provider.itms_id')
            ->join('app_itms', 'app_itms.itms_id', '=', 'itms.id')
            ->oldest('itms_provider.id');

        $output = $this->command->getOutput();
        $progress = $output->progressStart($query->count());
        $chunkSize = min($query->count(), 2500);
        $query
            ->chunk($chunkSize, function ($models) use ($output, $chunkSize) {
                $inserts = [];
                foreach ($models as $model) {
                    $model = (array) $model;
                    $inserts[] = [
                        ...Arr::only($model, ['working', 'url', 'created_at', 'updated_at']),
                        'type' => LinkType::Itms,
                        'model_type' => Content::class,
                        'model_id' => data_get($model, 'app_id'),
                        'author_type' => Team::class,
                        'author_id' => data_get($model, 'provider_id'),
                        'slug' => str()->random(10),
                    ];
                }
                Link::insert($inserts);
                $output->progressAdvance($chunkSize);
            });
        $output->progressFinish();
    }
}
