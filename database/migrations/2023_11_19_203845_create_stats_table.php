<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stats', function (Blueprint $table) {
            $table->id();
            $table->morphs('model');
            $table->string('type');
            $table->string('identifier');

            for ($i = 1; $i <= 7; $i++) {
                $table->timestamp("date_$i");
            }

            for ($i = 1; $i <= 7; $i++) {
                $table->integer("amount_$i");
            }

            $table->timestamp('summarized_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stats');
    }
};
