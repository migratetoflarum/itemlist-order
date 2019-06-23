<?php

namespace MigrateToFlarum\ItemlistOrder\Validators;

use Flarum\Foundation\AbstractValidator;

class ConfigValidator extends AbstractValidator
{
    protected $rules = [
        'config' => 'required|array',
        // TODO: better validation of the keys (start,end,hidden)
    ];
}
