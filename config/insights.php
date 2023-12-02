<?php

return [
    'listener' => SnowBuilds\Insights\Listeners\InsightListener::class,
    // /**
    //  * List of model classes that are comparable.
    //  */
    // 'comparable' => ['*'],

    // 'algorithms' => [
    //     'words' => 'levenshtein',
    //     'lists' => 'euclidean',
    //     'numbers' => 'minMaxNorm',
    // ],

    /**
     * Customize the models used internally.
     */
    'models' => [
        // represents 7 days worth of stats for given model
        'record' => \SnowBuilds\Stats\Models\Record::class,
        'summary' => \SnowBuilds\Insights\Models\Summary::class,
    ],

    // /**
    //  * Factories available to use in your project.
    //  */
    // 'factories' => [
    //     'stat' => \SnowBuilds\Stats\Factories\StatFactory::class,
    // ],

    /**
     * Customize the table names used internally.
     */
    'table_names' => [
        'insights' => 'stats',
        'summaries' => 'stat_summaries',
    ],

    /**
     * Customize the columns used internally.
     */
    'column_names' => [
        'model' => 'model',
        'model_id' => 'model_id',
        'model_type' => 'model_type',
        'event' => 'event',
        'identifier' => 'identifier',
        'date_prefix' => 'date',
        'amount_prefix' => 'amount',
        'start_at' => 'start_at',
        'end_at' => 'end_at',
        'summarized_at' => 'summarized_at',
        'extra' => 'extra',
        'json' => 'json',
        'total' => 'total',
    ],
];
