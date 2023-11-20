<?php

use App\Models\User;
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
        Schema::create('links', function (Blueprint $table) {
            $table->id();
            $table->morphs('model');
            $table->morphs('author');
            $table->string('type');
            $table->string('label')->nullable();
            $table->string('slug');
            $table->boolean('working')->default(true);
            $table->text('url');
            $table->boolean('external')->default(false);
            $table->timestamp('approved_at')->nullable();
            $table->foreignIdFor(User::class, 'approved_by')
                ->nullable()
                ->constrained('users')
                ->cascadeOnDelete();
            $table->softDeletes();
            $table->timestamps();

            $table->unique(['type', 'slug'], 'unique_slug');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('links');
    }
};
