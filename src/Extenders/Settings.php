<?php

namespace MigrateToFlarum\ItemlistOrder\Extenders;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Illuminate\Contracts\Container\Container;
use MigrateToFlarum\ItemlistOrder\Repositories\ConfigRepository;

class Settings implements ExtenderInterface
{
    public function extend(Container $container, Extension $extension = null)
    {
        $container['events']->listen(Serializing::class, [$this, 'permissions']);
    }

    public function permissions(Serializing $event)
    {
        if ($event->serializer instanceof ForumSerializer) {
            /**
             * @var $config ConfigRepository
             */
            $config = app(ConfigRepository::class);

            $event->attributes['itemorderConfig'] = $config->settingsAsObjectIgnoreErrors();
        }
    }
}
