<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AppResource\Pages;
use App\Models\Content\App;

class AppResource extends ContentResource
{
    protected static ?string $model = App::class;

    protected static ?string $navigationIcon = 'heroicon-o-square-3-stack-3d';

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListApps::route('/'),
            'create' => Pages\CreateApp::route('/create'),
            'edit' => Pages\EditApp::route('/{record}/edit'),
        ];
    }
}
