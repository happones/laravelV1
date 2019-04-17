<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Thomaswelton\LaravelGravatar\Facades\Gravatar;

class AuthController extends Controller
{

    public function login(LoginRequest $request)
    {

        if (auth()->attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = auth()->user();

            $token = $user->createToken('app')->accessToken;

            $data = [
                'message' => 'Inicio de sesión correcto.',
                'token' => $token
            ];

            auth()->logout();

            return response()->json($data)->header('Authorization', $token);
        }

        return response()->json([
            'message' => 'Credenciales inválidas',
        ], 422);
    }

    public function register(RegisterRequest $request)
    {
        $user =  new User($request->except('password'));
        $user->avatar = Gravatar::src($request->email);
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            'message' => 'Registro completo'
        ]);
    }



}
