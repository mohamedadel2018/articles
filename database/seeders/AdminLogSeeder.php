<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class AdminLogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('admins')->insert([
            'name' => 'khaled mohamed',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('123456789'),
        ]);
    }
}
