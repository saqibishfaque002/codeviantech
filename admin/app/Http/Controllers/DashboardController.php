<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use App\Models\Service;
use App\Models\Solution;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'total_leads' => Inquiry::count(),
            'new_leads' => Inquiry::where('status', 'new')->count(),
            'in_review_leads' => Inquiry::where('status', 'in_review')->count(),
            'converted_leads' => Inquiry::where('status', 'converted')->count(),
            'total_services' => Service::where('is_active', true)->count(),
            'total_solutions' => Solution::where('is_active', true)->count(),
            'total_team' => User::count(), //
        ];

        $recentInquiries = Inquiry::latest()->take(6)->get();

        return view('admin.dashboard', compact('stats', 'recentInquiries'));
    }
}
