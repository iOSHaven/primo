<?php

namespace Database\Seeders;

use Database\Seeders\Production\AdminSeeder;
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
        ]);
    }
}
