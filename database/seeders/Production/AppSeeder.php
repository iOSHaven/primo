<?php

namespace Database\Seeders\Production;

use App\Models\Content;
use App\Models\Enum\ContentType;
use App\Models\Release;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class AppSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $query = DB::connection('legacy')->table('apps')->oldest('id');

        $output = $this->command->getOutput();
        $progress = $output->progressStart($query->count());
        $query
            ->chunk(2500, function ($models) use ($output) {
                $inserts = [];
                $versions = [];
                foreach ($models as $model) {
                    $model = (array) $model;
                    $inserts[] = [
                        ...Arr::only($model, ['id', 'name', 'description', 'created_at', 'updated_at']),
                        'snippet' => data_get($model, 'short'),
                        'type' => ContentType::App,
                    ];
                    $versions[] = [
                        ...Arr::only($model, ['id', 'created_at', 'updated_at']),
                        'content_id' => data_get($model, 'id'),
                        'sort_order' => 0,
                        'version' => 'n/a',
                        'name' => 'N/A',
                        'short' => 'Unknown version',
                        'description' => 'Version is unknown because old database did not store information about version numbers',
                        'approved_at' => now(),
                        'approved_by' => 1,
                    ];
                }
                Content::insertOrIgnore($inserts);
                Release::insertOrIgnore($versions);
                $output->progressAdvance(2500);
            });
        $output->progressFinish();

        $this->call([
            AppLinkSeeder::class,
        ]);
    }
}
