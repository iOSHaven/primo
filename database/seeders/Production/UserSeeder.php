<?php

namespace Database\Seeders\Production;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userQuery = DB::connection('legacy')->table('users')->oldest('id');

        $output = $this->command->getOutput();
        $progress = $output->progressStart($userQuery->count());
        $password = Hash::make(config('app.password'));
        $userQuery
            ->chunk(2500, function ($models) use ($output, $password) {
                $inserts = [];
                foreach ($models as $model) {
                    $model = (array) $model;
                    $ts = now();
                    $inserts[] = [
                        ...Arr::only($model, ['username', 'email', 'email_verified_at', 'created_at', 'updated_at']),
                        'password' => app()->isProduction() ? data_get($model, 'password') : $password,
                        'imported_at' => $ts,
                    ];
                }
                User::insertOrIgnore($inserts);
                $output->progressAdvance(2500);
            });
        $output->progressFinish();
    }
}
