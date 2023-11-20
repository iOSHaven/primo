<?php

namespace App\Filament\Resources\ShortcutResource\Pages;

use App\Filament\Resources\ShortcutResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditShortcut extends EditRecord
{
    protected static string $resource = ShortcutResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
