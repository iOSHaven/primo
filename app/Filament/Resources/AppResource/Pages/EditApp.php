<?php

namespace App\Filament\Resources\AppResource\Pages;

use App\Events\ViewEvent;
use App\Filament\Resources\AppResource;
use App\Livewire\InsightsChart;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditApp extends EditRecord
{
    protected static string $resource = AppResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        /** @var App\Models\Content\App $app */
        $app = $this->getRecord();

        // dd($app->insightsWhere(ViewEvent::class)->daysAgo(90));
        return [
            InsightsChart::make([
                'chart' => [
                    '90day' => $app->insightsWhere(ViewEvent::class)->daysAgo(90),
                    '28day' => $app->insightsWhere(ViewEvent::class)->daysAgo(28),
                    '14day' => $app->insightsWhere(ViewEvent::class)->daysAgo(14),
                    '7day' => $app->insightsWhere(ViewEvent::class)->daysAgo(7),
                ],
                // 'filter' => '28day',
                'label' => 'Views',
            ]),
        ];
    }
}
