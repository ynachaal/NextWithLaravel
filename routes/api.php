<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\StudentRepoController;



Route::get('students', [StudentRepoController::class, 'index']);

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//    return " test";
    return $request->user();
});
