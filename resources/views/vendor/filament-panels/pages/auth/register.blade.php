<x-filament-panels::page.simple>
    {{ \Filament\Support\Facades\FilamentView::renderHook('panels::auth.register.form.before') }}

    <x-filament-panels::form wire:submit="register">
        {{ $this->form }}

        <x-filament-panels::form.actions
            :actions="$this->getCachedFormActions()"
            :full-width="$this->hasFullWidthFormActions()"
        />

        @if (filament()->hasLogin())
            <div>
                {{ __('filament-panels::pages/auth/register.actions.login.before') }}

                {{ $this->loginAction }}
            </div>
        @endif
    </x-filament-panels::form>

    {{ \Filament\Support\Facades\FilamentView::renderHook('panels::auth.register.form.after') }}
</x-filament-panels::page.simple>
