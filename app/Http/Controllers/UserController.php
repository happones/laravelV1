<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\StoreRequest;
use App\Http\Requests\User\UpdateRequest;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Thomaswelton\LaravelGravatar\Facades\Gravatar;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $perPage = \request('perPage') ?: 10;
        $field = \request('field') ?: 'id';
        $sort = \request('sort') ?: 'desc';

        $users = User::orderBy($field, $sort);

        if (\request('query')) {

            $query = \request('query');

            $users->where('name', 'like', "%{$query}%")
                ->orWhere('email', 'like', "%{$query}%");
        }


        return response()->json($users->paginate($perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        $user = new User($request->except('avatar', 'password'));

        if ($request->has('password')) {
            $user->password = Hash::make($request->password);
        }

        if ($request->hasFile('image')) {
            $path = $request->image->store('avatar', 'public');
            $user->avatar = asset("storage/{$path}");
        } else {
            $user->avatar = Gravatar::src($request->email);
        }

        $user->save();

        return response()->json([
            'message' => 'Datos creados'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return response()->json($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, User $user)
    {
        $user->fill($request->except('password', 'avatar'));

        if ($request->has('password')) {
            $user->password = Hash::make($request->password);
        }

        if ($request->hasFile('image')) {
            $path = $request->image->store('avatar', 'public');
            $user->avatar = asset("storage/{$path}");
        }

        $user->save();

        return response()->json([
            'message' => 'Datos actualizados'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $auth = \request()->user();

        if ($auth->id === $user->id) {
            return response()->json([
                'message' => 'Este registro no puede ser eliminado'
            ], 422);
        }

        $user->delete();

        return response()->json([
            'message' => 'Datos eliminados'
        ]);
    }
}
