<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use SnowBuilds\Insights\Insights;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $summariesTable = config('insights.table_names.summaries');
        if (Schema::hasTable($summariesTable)) {
            return;
        }

        Schema::create($summariesTable, function (Blueprint $table) {

            $model = config('insights.column_names.model');
            $event = config('insights.column_names.event');
            $json = config('insights.column_names.json');
            $identifier = config('insights.column_names.identifier');
            $start_at = config('insights.column_names.start_at');
            $end_at = config('insights.column_names.end_at');

            $table->id();
            $table->nullableMorphs($model);
            $table->string($event)->nullable();
            $table->string($identifier, 100)->nullable();
            $table->timestamp($start_at);
            $table->timestamp($end_at);
            $table->json($json);
            $table->integer('total');
            $table->softDeletes();
            $table->timestamps();

            $table->unique(Insights::summaryUniqueColumns(), 'unique_summary');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $summariesTable = config('insights.table_names.summaries');
        Schema::dropIfExists($summariesTable);
    }
};
