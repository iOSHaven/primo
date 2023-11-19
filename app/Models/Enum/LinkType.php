<?php

namespace App\Models\Enum;

enum LinkType: string
{
    case Itms = 'itms';
    case Ipa = 'ipa';
    case Apk = 'apk';
    case Social = 'social';
}
