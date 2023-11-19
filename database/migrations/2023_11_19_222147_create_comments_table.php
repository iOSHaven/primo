<?php

use App\Models\Comment;
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
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->morphs('model');
            $table->morphs('author');
            $table->foreignIdFor(Comment::class, 'parent_id')
                ->constrained('comments')
                ->cascadeOnDelete();
            $table->longText('content');
            $table->longText('edit');
            $table->json('extra');
            $table->timestamp('approved_at')->nullable();
            $table->foreignIdFor(User::class, 'approved_by')
                ->nullable()
                ->constrained('users')
                ->cascadeOnDelete();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
