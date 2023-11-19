<?php

namespace App\Filament\Pages\Auth;

use Filament\Pages\Auth\Register as Page;
use Illuminate\Contracts\Support\Htmlable;

class Register extends Page
{
    public function getTitle(): string|Htmlable
    {
        return 'Hello world';
    }
}
