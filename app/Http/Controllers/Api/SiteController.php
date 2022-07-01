<?php

namespace App\Http\Controllers\Api;

use App\Actions\Site\CreateSiteAction;
use App\DataTransferObjects\SiteData;
use App\DataTransferObjects\Support\DataCollection;
use App\Http\Controllers\Controller;
use App\Models\Site;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SiteController extends Controller
{
    public function index(): DataCollection
    {
        return SiteData::collection(Site::paginate());
    }

    public function store(Request $request): Response|JsonResponse
    {
        $site = app(CreateSiteAction::class)->execute(
            SiteData::validate($request->only('server_id', 'domain'))
        );

        $site->refresh();

        return $site
            ? response(content: ['data' => SiteData::from($site)], status: 201)
            : response()->json([
                'message' => __('It seems there is no free server room for this site to take place. Please get in touch with support to resolve this.')
            ], 422);
    }

    public function show(Site $site):Response
    {
        return response(content: ['data' => SiteData::from($site)]);
    }
}
