<?php

namespace App\Filament\Resources\ShortcutResource\Pages;

use App\Filament\Resources\ShortcutResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListShortcuts extends ListRecords
{
    protected static string $resource = ShortcutResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
