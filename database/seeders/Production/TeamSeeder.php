<?php

namespace Database\Seeders\Production;

use App\Models\Team;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $query = DB::connection('legacy')->table('providers')->oldest('id');

        $output = $this->command->getOutput();
        $progress = $output->progressStart($query->count());
        $query
            ->chunk(2500, function ($models) use ($output) {
                $inserts = [];
                foreach ($models as $model) {
                    $model = (array) $model;
                    $inserts[] = [
                        ...Arr::only($model, ['id', 'name', 'created_at', 'updated_at', 'deleted_at']),
                        'identifier' => str(data_get($model, 'name'))->slug(),
                        'domain' => str(data_get($model, 'website'))->after('://'),
                        'active' => str(data_get($model, 'working')),
                    ];
                }
                Team::insertOrIgnore($inserts);
                $output->progressAdvance(2500);
            });
        $output->progressFinish();
    }
}
