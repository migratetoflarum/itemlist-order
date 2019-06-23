<?php

namespace MigrateToFlarum\ItemlistOrder\Repositories;

use Flarum\Foundation\ValidationException;
use Flarum\Settings\SettingsRepositoryInterface;

class ConfigRepository
{
    const SETTINGS_KEY = 'migratetoflarum-itemlist-order-configs';

    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function settingsAsAssocWithErrors(): array
    {
        $storedString = $this->settings->get(self::SETTINGS_KEY);

        $configs = [];

        if ($storedString) {
            $configs = json_decode($storedString, true);

            if (JSON_ERROR_NONE !== json_last_error()) {
                throw new ValidationException([
                    'itemlist-order' => [
                        'Error decoding existing settings: ' . json_last_error_msg(),
                    ],
                ]);
            }

            if (!is_array($configs)) {
                throw new ValidationException([
                    'itemlist-order' => [
                        'Existing settings are not stored as an array',
                    ],
                ]);
            }
        }

        return $configs;
    }

    public function settingsAsObjectIgnoreErrors()
    {
        $configs = json_decode($this->settings->get(self::SETTINGS_KEY));

        // If the config is empty or if there was an error, return empty object
        if (!$configs) {
            // So it serializes as an empty JSON object
            $configs = new \stdClass();
        }

        return $configs;
    }

    public function saveSettings(array $configs)
    {
        ksort($configs);

        if (count($configs) === 0) {
            // So it serializes as an empty JSON object
            $configs = new \stdClass();
        }

        $this->settings->set(self::SETTINGS_KEY, json_encode($configs));
    }
}
