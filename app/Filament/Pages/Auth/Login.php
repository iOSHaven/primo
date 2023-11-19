<?php

namespace App\Filament\Pages\Auth;

use Filament\Forms\Components\Component;
use Filament\Forms\Components\TextInput;
use Filament\Pages\Auth\Login as Page;

class Login extends Page
{
    public function hasLogo(): bool
    {
        return false;
    }

    protected function getEmailFormComponent(): Component
    {
        return TextInput::make('login')
            ->label(__('filament-panels::pages/auth/login.form.email.label'))
            ->required()
            ->autocomplete()
            ->autofocus()
            ->extraInputAttributes(['tabindex' => 1]);
    }

    protected function getCredentialsFromFormData(array $data): array
    {
        $input = $data['login'];
        $login_type = filter_var($input, FILTER_VALIDATE_EMAIL) ? 'email' : 'name';

        return [
            $login_type => $input,
            'password' => $data['password'],
        ];
    }
}
