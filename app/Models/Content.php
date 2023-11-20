<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use SnowBuilds\Mirror\Concerns\Recommendations;

class Content extends Model
{
    use HasFactory;
    use Recommendations;

    protected $table = 'content';

    public function registerRecommendations()
    {
    }
}
