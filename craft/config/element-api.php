<?php

use craft\elements\Entry;
use craft\helpers\UrlHelper;

return [
    'endpoints' => [
        'creative.json' => function() {
            return [
                'elementType' => Entry::class,
                'criteria' => ['section' => 'creative'],
                'transformer' => function(Entry $entry) {
                    $asset = $entry->asset->one();

                    return [
                        'id' => $entry->id,
                        'slug' => $entry->slug,
                        'title' => $entry->title,
                        'asset' => $asset ? $asset : null,
                        'campaign' => $entry->campaign,
                        'client' => (string)$entry->client,
                        'date' => $entry->date,
                        'url' => $entry->url,
                        'jsonUrl' => UrlHelper::url("creative/{$entry->id}.json"),
                    ];
                },
            ];
        },
    ]
];