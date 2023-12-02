<?php

namespace App\Providers;

use Filament\Facades\Filament;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Number;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Number::macro('forHumansShort', function (int|float $number, int $precision = 2, int $maxPrecision = null) {
            [$number, $word] = explode(' ', Number::forHumans($number, $precision, $maxPrecision));
            $word = strtr($word, [
                'thousand' => 'K',
                'million' => 'M',
                'billion' => 'B',
                'trillion' => 'T',
                'quadrillion' => 'Qa',
            ]);

            return implode('', [$number, $word]);
        });
        // Filament::registerRenderHook(
        //     'head.end',
        //     fn () => Blade::render('@vite([\'resources/css/app.css\',\'resources/js/app.js\'])'),
        // );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
