<?php

namespace MigrateToFlarum\ItemlistOrder\Controllers;

use Flarum\User\AssertPermissionTrait;
use MigrateToFlarum\ItemlistOrder\Repositories\ConfigRepository;
use MigrateToFlarum\ItemlistOrder\Validators\ConfigValidator;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\JsonResponse;

class SaveOrderController implements RequestHandlerInterface
{
    use AssertPermissionTrait;

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $this->assertAdmin($request->getAttribute('actor'));

        /**
         * @var $config ConfigRepository
         */
        $config = app(ConfigRepository::class);

        $configs = $config->settingsAsAssocWithErrors();

        $key = array_get($request->getQueryParams(), 'key');
        $value = $request->getParsedBody();

        $hasNonEmptyValues = false;

        // Check each key (start,end,hidden) to see if they contain anything
        foreach ($value as $entry) {
            if (count($entry)) {
                $hasNonEmptyValues = true;
                break;
            }
        }

        // If absolutely nothing is set, clear the value so we remove it from the database in next step
        if (!$hasNonEmptyValues) {
            $value = null;
        }

        if ($value) {
            /**
             * @var $validator ConfigValidator
             */
            $validator = app(ConfigValidator::class);

            $validator->assertValid([
                'config' => $value,
            ]);

            $configs[$key] = $value;
        } else if (array_has($configs, $key)) {
            unset($configs[$key]);
        }

        $config->saveSettings($configs);

        return new JsonResponse($config->settingsAsObjectIgnoreErrors());
    }
}
