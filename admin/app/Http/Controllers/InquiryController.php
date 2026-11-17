<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\StreamedResponse;

class InquiryController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->query('status', 'all');
        $search = $request->query('search');

        $query = Inquiry::query()->latest();

        if ($status !== 'all') {
            $query->where('status', $status);
        }

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('company', 'like', "%{$search}%")
                  ->orWhere('service', 'like', "%{$search}%");
            });
        }

        $inquiries = $query->paginate(15)->withQueryString();

        return view('admin.inquiries.index', compact('inquiries', 'status', 'search'));
    }

    public function show(Inquiry $inquiry)
    {
        return view('admin.inquiries.show', compact('inquiry'));
    }

    public function updateStatus(Request $request, Inquiry $inquiry)
    {
        $request->validate([
            'status' => ['required', 'in:new,in_review,contacted,converted,archived'],
        ]);

        $inquiry->update([
            'status' => $request->status,
        ]);

        return back()->with('success', __('admin.status_updated_successfully'));
    }

    public function updateNotes(Request $request, Inquiry $inquiry)
    {
        $request->validate([
            'admin_notes' => ['nullable', 'string'],
        ]);

        $inquiry->update([
            'admin_notes' => $request->admin_notes,
        ]);

        return back()->with('success', 'Internal notes updated successfully.');
    }

    public function destroy(Inquiry $inquiry)
    {
        $inquiry->delete();
        return redirect()->route('admin.inquiries.index')->with('success', 'Inquiry removed successfully.');
    }

    public function exportCsv(): StreamedResponse
    {
        $fileName = 'inquiries_' . date('Y-m-d_H-i') . '.csv';

        return response()->streamDownload(function () {
            $handle = fopen('php://output', 'w');
            fputcsv($handle, ['ID', 'Name', 'Email', 'Company', 'Service', 'Budget', 'Status', 'Date', 'Message']);

            Inquiry::chunk(100, function ($inquiries) use ($handle) {
                foreach ($inquiries as $inq) {
                    fputcsv($handle, [
                        $inq->id,
                        $inq->name,
                        $inq->email,
                        $inq->company,
                        $inq->service,
                        $inq->budget,
                        $inq->status,
                        $inq->created_at->toDateTimeString(),
                        $inq->message,
                    ]);
                }
            });

            fclose($handle);
        }, $fileName, [
            'Content-Type' => 'text/csv',
        ]);
    }
}
