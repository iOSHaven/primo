<?php

return [

    'title' => 'Register',

    'heading' => 'New account',

    'actions' => [

        'login' => [
            'before' => 'Already have an account?',
            'label' => 'Login',
        ],

    ],

    'form' => [

        'email' => [
            'label' => 'Email address',
        ],

        'name' => [
            'label' => 'Name',
        ],

        'password' => [
            'label' => 'Password',
            'validation_attribute' => 'password',
        ],

        'password_confirmation' => [
            'label' => 'Confirm password',
        ],

        'actions' => [

            'register' => [
                'label' => 'Sign up',
            ],

        ],

    ],

    'notifications' => [

        'throttled' => [
            'title' => 'Too many registration attempts',
            'body' => 'Please try again in :seconds seconds.',
        ],

    ],

];
