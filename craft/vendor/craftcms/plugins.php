<?php

$vendorDir = dirname(__DIR__);
$rootDir = dirname(dirname(__DIR__));

return array (
  'craftcms/element-api' => 
  array (
    'class' => 'craft\\elementapi\\Plugin',
    'basePath' => $vendorDir . '/craftcms/element-api/src',
    'handle' => 'element-api',
    'aliases' => 
    array (
      '@craft/elementapi' => $vendorDir . '/craftcms/element-api/src',
    ),
    'name' => 'Element API',
    'version' => '2.6.0',
    'description' => 'Create a JSON API for your elements in Craft',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://pixelandtonic.com/',
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://github.com/craftcms/element-api/blob/v2/README.md',
  ),
  'billythekid/conditional-fields' => 
  array (
    'class' => 'billythekid\\conditionalfields\\ConditionalFields',
    'basePath' => $vendorDir . '/billythekid/conditional-fields/src',
    'handle' => 'conditional-fields',
    'aliases' => 
    array (
      '@billythekid/conditionalfields' => $vendorDir . '/billythekid/conditional-fields/src',
    ),
    'name' => 'Conditional Fields',
    'version' => '0.0.5',
    'description' => 'Show or hide fields based on the value of other fields.',
    'developer' => 'Billy Fagan',
    'developerUrl' => 'https://billyfagan.co.uk',
    'documentationUrl' => 'https://github.com/billythekid/conditional-fields/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/billythekid/conditional-fields/master/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => false,
  ),
);
