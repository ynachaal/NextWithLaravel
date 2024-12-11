<?php

namespace App\Http\Controllers;

use App\Models\StudentRepo;
use Illuminate\Http\Request;

class StudentRepoController extends Controller
{
    public function index()
    {
        $students1 = [
            [
                "id" => 0,
                "name" => "Alice",
                "marks" => 85
            ],
            [
                "id" => 1,
                "name" => "Bob",
                "marks" => 92
            ],
            [
                "id" => 2,
                "name" => "Charlie",
                "marks" => 78
            ],
            [
                "id" => 3,
                "name" => "Diana",
                "marks" => 88
            ],
            [
                "id" => 4,
                "name" => "Eve",
                "marks" => 95
            ]
        ];

        $students = StudentRepo::select(['id','name','marks'])->get()->toArray() ?? []; // Fetch all records

//        dd($students);
        return response()->json($students);
    }
}
