<?php

namespace App\Exceptions;

use App\Http\Middleware\SetLocale;
use Exception;
use Throwable;
use Illuminate\Http\Request;
use App\Http\Middleware\HandleInertiaRequests;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param Throwable $exception
     * @return void
     *
     * @throws Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param Request $request
     * @param Throwable $exception
     * @return Response
     *
     * @throws Throwable
     */
    public function render($request, Throwable $exception)
    {
        $response = parent::render($request, $exception);

        // Only return an Inertia-response when there are special Vue-templates (403 and 404) and when it isn't an API request.
        if (in_array($response->status(), [403, 404]) && ! $request->routeIs('api.*')) {
            inertia()->share([
                'translations' => SetLocale::getTranslations()
            ]);

            return app(HandleInertiaRequests::class)
                ->handle($request, fn () => inertia()->render('Errors/' . $response->status(), ['status' => $response->status()])
                ->toResponse($request));
        }

        return $response;
    }
}
