<?php

namespace Database\Seeders\Production;

use App\Models\Content;
use App\Models\Content\Shortcut;
use App\Models\Enum\ContentType;
use App\Models\Enum\LinkType;
use App\Models\Link;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class ShortcutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $query = DB::connection('legacy')->table('shortcuts')->oldest('id');

        $output = $this->command->getOutput();
        $progress = $output->progressStart($query->count());
        $contentId = Content::orderBy('id', 'desc')->first()->id;
        $query
            ->chunk(2500, function ($models) use ($output, $contentId) {
                $inserts = [];
                $links = [];
                foreach ($models as $model) {
                    $model = (array) $model;
                    $inserts[] = [
                        ...Arr::only($model, ['name', 'description', 'created_at', 'updated_at', 'deleted_at']),
                        'type' => ContentType::Shortcut,
                        'id' => $id = ($contentId + data_get($model, 'id')),
                    ];
                    $links[] = [
                        ...Arr::only($model, ['created_at', 'updated_at', 'deleted_at']),
                        'slug' => $slug = data_get($model, 'itunes_id'),
                        'type' => LinkType::Shortcut,
                        'model_id' => $id,
                        'model_type' => Shortcut::class,
                        'author_id' => data_get($model, 'user_id'),
                        'author_type' => User::class,
                        'url' => "https://www.icloud.com/shortcuts/{$slug}",
                        'external' => true,
                        'working' => true,
                    ];
                }
                Content::insert($inserts);
                Link::insertOrIgnore($links);
                $output->progressAdvance(2500);
            });
        $output->progressFinish();
    }
}
