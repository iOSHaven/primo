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
        $tableNames = config('mirror.table_names', []);
        $columnNames = config('mirror.column_names', []);

        Schema::create(data_get($tableNames, 'recommendations', 'recommendations'), function (Blueprint $table) use ($columnNames) {
            $table->bigIncrements(data_get($columnNames, 'recommendation_pk', 'id'));
            $table->string($type = data_get($columnNames, 'type', 'type'), 100)->default('default');
            $table->nullableMorphs($model = data_get($columnNames, 'model', 'model'));
            $table->nullableMorphs($recommended = data_get($columnNames, 'recommended', 'recommended'));
            $table->decimal(data_get($columnNames, 'score', 'score'), 8, 6)->nullable();
            $table->timestamps();
            $table->unique([
                $type,
                data_get($columnNames, 'model_id', "{$model}_id"),
                data_get($columnNames, 'model_type', "{$model}_type"),
                data_get($columnNames, 'recommended_id', "{$recommended}_id"),
                data_get($columnNames, 'recommended_type', "{$recommended}_type"),
            ], 'unique_recommendation');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recommendations');
    }
};
