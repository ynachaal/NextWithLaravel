<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentRepo extends Model
{
    use HasFactory;

//    protected $table = 'student_repo'; // The name of your database table
    protected $fillable = ['name', 'marks']; // Adjust as per your table columns
}
