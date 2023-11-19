<?php

namespace Database\Seeders\Development;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        \App\Models\User::factory()->create([
            'name' => 'Team Manager',
            'username' => 'team',
            'email' => 'team@example.com',
            'password' => Hash::make(config('app.password')),
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Team Member',
            'username' => 'member',
            'email' => 'member@example.com',
            'password' => Hash::make(config('app.password')),
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Customer',
            'username' => 'customer',
            'email' => 'customer@example.com',
            'password' => Hash::make(config('app.password')),
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Standard User',
            'username' => 'user',
            'email' => 'user@example.com',
            'password' => Hash::make(config('app.password')),
        ]);

        \App\Models\User::factory(10)->create();
    }
}
