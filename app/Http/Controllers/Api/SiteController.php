<?php

namespace App\Http\Controllers\Api;

use App\Actions\Site\CreateSiteAction;
use App\DataTransferObjects\SiteData;
use App\Http\Controllers\Controller;
use App\Models\Site;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SiteController extends Controller
{
    public function index(): mixed
    {
        return SiteData::collection(Site::paginate());
    }

    public function store(Request $request): Response|JsonResponse
    {
        // Required parameters are validated at the controller level. For example in the API you need to manually pass a user_id,
        // whilst in the "authenticated part" the user id is takes as Auth::id(). Validation of universal rules is done at the
        // data-object level (e.g. exists:server_id).
        $data = $request->validate([
            'server_id' => ['required'],
            'domain' => ['required'],
            'user_id' => ['required'],
        ]);
        
        $site = app(CreateSiteAction::class)->execute(
            SiteData::validate($data)
        );

        $site->refresh();

        return $site
            ? response(content: ['data' => SiteData::from($site)->toArray()], status: 201)
            : response()->json([
                'message' => __('It seems there is no free server room for this site to take place. Please get in touch with support to resolve this.'),
            ], 422);
    }

    public function show(Site $site): Response
    {
        return response(content: ['data' => SiteData::from($site)]);
    }
}
