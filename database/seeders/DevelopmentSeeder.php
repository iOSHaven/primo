<?php

namespace Database\Seeders;

use Database\Seeders\Development\UserSeeder;
use Illuminate\Database\Seeder;

class DevelopmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
        ]);
    }
}
