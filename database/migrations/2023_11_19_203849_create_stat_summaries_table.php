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
        Schema::create('stat_summaries', function (Blueprint $table) {
            $table->id();
            $table->nullableMorphs('model');
            $table->string('type');
            $table->string('identifier');
            $table->timestamp('start_at');
            $table->timestamp('end_at');
            $table->json('json');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stat_summaries');
    }
};
