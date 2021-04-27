<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
class CatigorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'name' => 'Sciences',
            'created_at' => Carbon::now(),
        ]);
        DB::table('categories')->insert([
            'name' => 'History',
            'created_at' => Carbon::now(),
        ]);
        DB::table('categories')->insert([
            'name' => 'civilization',
            'created_at' => Carbon::now(),
        ]);
    }
}
