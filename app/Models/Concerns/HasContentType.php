<?php

namespace App\Models\Concerns;

use App\Models\Enum\ContentType;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\App;

trait HasContentType
{
    public function newFromBuilder($attributes = [], $connection = null)
    {
        $type = ContentType::tryFrom(data_get($attributes, 'type'));
        $modelOverride = $type->modelName();
        if (static::class !== $modelOverride) {
            return App::make($modelOverride)->newFromBuilder($attributes, $connection);
        }

        return parent::newFromBuilder($attributes, $connection);
    }

    public static function bootHasContentType()
    {
        $type = ContentType::tryFromModelName(static::class)?->value;
        static::addGlobalScope(
            'type',
            fn (Builder $query) => $query->when(
                fn () => ! is_null($type),
                fn ($query) => $query->where(
                    'type',
                    ContentType::tryFromModelName(static::class)?->value
                )
            )
        );
    }

    protected function initializeHasContentType(): void
    {
        $this->attributes['type'] ??= ContentType::tryFromModelName(static::class);
    }
}
