<?php

namespace Tests\Unit;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserCreateTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testCreateData()
    {
        $user = \App\User::firstOrNew(['name' => 'TestUser', 'email' => 'test_user@email.com']);

        $user->password = Hash::make('password');

        $user->save();

        $token = $user->createToken('app')->accessToken;

        $response = $this->withHeaders([
            'Authorization' => "Bearer ${token}",
        ])->json('POST', '/api/user', [
            'name' => 'Sally',
            'email' => Str::random('10') . '@email.com',
            'password' => $pass = 'password',
            'password_confirmation' => $pass
        ]);

        $response->assertStatus(201);
    }
}
