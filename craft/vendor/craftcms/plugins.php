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
    'version' => '0.0.6',
    'description' => 'Show or hide fields based on the value of other fields.',
    'developer' => 'Billy Fagan',
    'developerUrl' => 'https://billyfagan.co.uk',
    'documentationUrl' => 'https://github.com/billythekid/conditional-fields/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/billythekid/conditional-fields/master/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => false,
  ),
  'nerds-and-company/schematic' => 
  array (
    'class' => 'NerdsAndCompany\\Schematic\\Schematic',
    'basePath' => $vendorDir . '/nerds-and-company/schematic/src',
    'handle' => 'schematic',
    'aliases' => 
    array (
      '@NerdsAndCompany/Schematic' => $vendorDir . '/nerds-and-company/schematic/src',
    ),
    'name' => 'Schematic',
    'version' => '4.1.1',
    'description' => 'Craft setup and sync tool',
    'developer' => 'Nerds & Company',
    'developerUrl' => 'https://nerds.company',
    'documentationUrl' => 'https://github.com/nerds-and-company/schematic/blob/master/README.md',
    'changelogUrl' => 'https://github.com/nerds-and-company/schematic/blob/master/CHANGELOG.md',
    'downloadUrl' => 'https://github.com/nerds-and-company/schematic/releases/latest',
  ),
  'venveo/craft-bulkedit' => 
  array (
    'class' => 'venveo\\bulkedit\\Plugin',
    'basePath' => $vendorDir . '/venveo/craft-bulkedit/src',
    'handle' => 'venveo-bulk-edit',
    'aliases' => 
    array (
      '@venveo/bulkedit' => $vendorDir . '/venveo/craft-bulkedit/src',
    ),
    'name' => 'Bulk Edit',
    'version' => '2.0.5',
    'description' => 'Bulk edit Craft CMS element fields',
    'developer' => 'Venveo',
    'developerUrl' => 'https://venveo.com',
    'documentationUrl' => 'https://github.com/venveo/craft-bulkedit/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/venveo/craft-bulkedit/master/CHANGELOG.md',
  ),
);
