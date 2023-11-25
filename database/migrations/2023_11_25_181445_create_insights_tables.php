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
        $insightsTable = config('insights.table_names.insights');
        if (Schema::hasTable($insightsTable)) {
            return;
        }

        Schema::create($insightsTable, function (Blueprint $table) {

            $model = config('insights.column_names.model');
            $event = config('insights.column_names.event');
            $date_prefix = config('insights.column_names.date_prefix');
            $amount_prefix = config('insights.column_names.amount_prefix');
            $extra = config('insights.column_names.extra');
            $identifier = config('insights.column_names.identifier');
            $summarized_at = config('insights.column_names.summarized_at');

            $table->id();
            $table->morphs($model);
            $table->string($event);
            $table->string($identifier)->nullable();

            for ($i = 1; $i <= 7; $i++) {
                $table->timestamp($date_prefix.'_'.$i);
            }

            for ($i = 1; $i <= 7; $i++) {
                $table->integer($amount_prefix.'_'.$i);
            }

            $table->timestamp($summarized_at);
            $table->json($extra)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // $insightsTable = config('insights.table_names.insights');
        // Schema::dropIfExists($insightsTable);
    }
};
