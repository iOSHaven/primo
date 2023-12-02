<?php

namespace App\Livewire;

use Filament\Widgets\ChartWidget;
use Illuminate\Support\Arr;
use Illuminate\Support\Traits\Tappable;

class InsightsChart extends ChartWidget
{
    use Tappable;

    protected static ?string $heading = 'Chart';

    public ?string $filter = null;

    public array $chart = [];

    public ?string $label = 'Insights';

    protected function getFilters(): ?array
    {
        $filters = Arr::only([
            '7day' => '7 Days',
            '14day' => '14 Days',
            '28day' => '28 Days',
            '90day' => '90 Days',
        ], array_keys($this->getChart()));

        return $filters;
    }

    protected function getFilter()
    {
        return $this->filter ?? head(array_keys($this->getFilters()));
    }

    protected function getData(): array
    {
        $chart = data_get($this->getChart(), [$this->getFilter(), 'json'], []);
        $data = [
            'datasets' => [
                [
                    'label' => 'views',
                    'data' => array_values($chart),
                    'borderWidth' => 2,
                    'fill' => 'start',
                    'tension' => 0.5,
                ],
            ],
            'labels' => array_keys($chart),
        ];

        return $data;
    }

    protected function getChart(): array
    {
        return $this->chart;
    }

    protected function getCount(): string|int|float|null
    {
        return data_get($this->getChart(), [$this->getFilter(), 'total'], 0);
    }

    protected function getLabel(): ?string
    {
        return $this->label;
    }

    public function chart(array $data): self
    {
        return $this->tap(function () use ($data) {
            $this->chart = $data;
        });
    }

    protected function getType(): string
    {
        return 'line';
    }

    protected function getOptions(): array
    {
        return [
            'animation' => [
                'duration' => 0,
            ],
            'elements' => [
                'point' => [
                    'radius' => 0,
                ],
            ],
            'pointRadius' => 0,
            'maintainAspectRatio' => false,
            'plugins' => [
                'legend' => [
                    'display' => false,
                ],
            ],
            'scales' => [
                'x' => [
                    'display' => false,
                ],
                'y' => [
                    'display' => false,
                ],
            ],
            'tooltips' => [
                'enabled' => false,
            ],
        ];
    }
}
