<?php

namespace App\Models\Enum;

enum ContentType: string
{
    case App = 'app';
    case Shortcut = 'shortcut';
    case Blog = 'blog';
    case Theme = 'theme';
    case Page = 'page';
}
