<?php

namespace MigrateToFlarum\ItemlistOrder;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Routes('api'))
        ->post('/itemlist-order/{key:[A-Za-z/]+\.[A-Za-z]+}', 'itemlist-order.api.save', Controllers\SaveOrderController::class),
    new Extenders\Settings(),
];
