<?php

namespace App\Models\Enum;

use App\Models\Content\App;
use App\Models\Content\BlogPost;
use App\Models\Content\Page;
use App\Models\Content\Shortcut;
use App\Models\Content\Theme;
use Illuminate\Support\Collection;

enum ContentType: string
{
    case App = 'app';
    case Shortcut = 'shortcut';
    case BlogPost = 'blog';
    case Theme = 'theme';
    case Page = 'page';

    public static function modelNames(): Collection
    {
        return collect([
            self::App->value => App::class,
            self::Shortcut->value => Shortcut::class,
            self::BlogPost->value => BlogPost::class,
            self::Theme->value => Theme::class,
            self::Page->value => Page::class,
        ]);
    }

    public function modelName(): string
    {
        return self::modelNames()
            ->get($this->value);
    }

    public static function tryFromModelName(string $model): ?static
    {
        $type = self::modelNames()
            ->flip()
            ->get($model);

        return is_null($type) ? null : self::tryFrom($type);
    }
}
