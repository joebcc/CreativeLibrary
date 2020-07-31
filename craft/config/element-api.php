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
                    $type = $entry->assetType->value;
                    return [
                        'id' => $entry->id,
                        'slug' => $entry->slug,
                        'title' => $entry->title,
                        'asset' => $asset ? $asset : null,
                        'type' => $type ? $type : '',
                        // 'campaign' => $entry->campaign,
                        'clients' => $entry->client->all(),
                        // 'client' => $entry->client->one(),
                        'date' => $entry->date,
                        'url' => $entry->url,
                        'jsonUrl' => UrlHelper::url("creative/{$entry->id}.json"),
                        'width' => $asset->width,
                        'height' => $asset->height,
                        'entry' => $entry,
                        'asset' => $asset,
                    ];
                },
            ];
        },
    ]
];