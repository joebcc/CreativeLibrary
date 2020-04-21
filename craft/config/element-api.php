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
                        'title' => $entry->title,
                        'url' => $entry->url,
                        'slug' => $entry->slug,
                        'id' => $entry->id,
                        'client' => (string)$entry->client,
                        'jsonUrl' => UrlHelper::url("creative/{$entry->id}.json"),
                        'asset' => $asset ? $asset : null,
                    ];
                },
            ];
        },
    ]
];