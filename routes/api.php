<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/me', function (Request $request) {
        return response()->json([
            'data' => $request->user()
        ]);
    });

    Route::apiResource('/user', 'UserController');
});

Route::name('login')->post('/login', 'Auth\AuthController@login');
Route::name('register')->post('/register', 'Auth\AuthController@register');