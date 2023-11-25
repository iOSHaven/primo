<?php

namespace App\Models;

use App\Models\Concerns\HasContentType;
use App\Models\Enum\StatType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use SnowBuilds\Insights\Concerns\Insights;
use SnowBuilds\Mirror\Concerns\Recommendations;

class Content extends Model
{
    use HasContentType;
    use HasFactory;
    use Insights;
    use Recommendations;

    protected $table = 'content';

    public function registerRecommendations()
    {
    }

    public function views()
    {
        return $this->morphMany(Stat::class, 'model')
            ->where('type', StatType::View);
    }
}
