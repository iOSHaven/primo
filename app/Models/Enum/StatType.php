<?php

namespace App\Models\Enum;

enum StatType: string
{
    case View = 'view';
    case Download = 'download';
    case Reaction = 'reaction';
}
