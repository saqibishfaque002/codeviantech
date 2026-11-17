<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solution extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'tag',
        'summary',
        'description',
        'metrics',
        'highlights',
        'is_active',
    ];

    protected $casts = [
        'metrics' => 'array',
        'highlights' => 'array',
        'is_active' => 'boolean',
    ];
}
