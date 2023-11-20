<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ShortcutResource\Pages;
use App\Models\Content\Shortcut;

class ShortcutResource extends ContentResource
{
    protected static ?string $model = Shortcut::class;

    protected static ?string $navigationIcon = 'heroicon-o-scissors';

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListShortcuts::route('/'),
            'create' => Pages\CreateShortcut::route('/create'),
            'edit' => Pages\EditShortcut::route('/{record}/edit'),
        ];
    }
}
