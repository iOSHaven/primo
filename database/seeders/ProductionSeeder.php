<?php

namespace Database\Seeders;

use App\Models\Stat;
use Database\Seeders\Production\AdminSeeder;
use Database\Seeders\Production\AppSeeder;
use Database\Seeders\Production\ShortcutSeeder;
use Database\Seeders\Production\StatSeeder;
use Database\Seeders\Production\UserSeeder;
use Illuminate\Database\Seeder;

class ProductionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->call([
            AdminSeeder::class,
            UserSeeder::class,
            AppSeeder::class,
            ShortcutSeeder::class,
        ]);

        if (! Stat::exists()) {
            $this->call(StatSeeder::class);
        }
    }
}
