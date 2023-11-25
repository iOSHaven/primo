<?php

namespace Database\Seeders;

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
            StatSeeder::class,
        ]);
    }
}
