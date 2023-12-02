<?php

namespace App\Filament\Resources\AppResource\Pages;

use App\Events\ViewEvent;
use App\Filament\Resources\AppResource;
use App\Livewire\InsightsChart;
use App\Models\Content\App;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListApps extends ListRecords
{
    protected static string $resource = AppResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [
            InsightsChart::make([
                'chart' => [
                    '90day' => App::insightsWhere(ViewEvent::class)->daysAgo(90),
                    '28day' => App::insightsWhere(ViewEvent::class)->daysAgo(28),
                    '14day' => App::insightsWhere(ViewEvent::class)->daysAgo(14),
                    '7day' => App::insightsWhere(ViewEvent::class)->daysAgo(7),
                ],
                'filter' => '28day',
                'label' => 'Views',
            ]),
        ];
    }
}
