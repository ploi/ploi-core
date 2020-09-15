<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\SupportTicket;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Mail\Support\TicketRepliedToEmail;
use App\Http\Requests\SupportTicketReplyRequest;

class SupportController extends Controller
{
    public function index()
    {
        $tickets = SupportTicket::whereIn('status', [
            SupportTicket::STATUS_CUSTOMER_REPLY,
            SupportTicket::STATUS_OPEN
        ])
            ->withCount('replies')
            ->latest()
            ->get();

        return inertia('Admin/Support/Index', [
            'tickets' => $tickets
        ]);
    }

    public function show($id)
    {
        $ticket = SupportTicket::with('user:id,name,email')->findOrFail($id);

        $replies = $ticket->replies()
            ->with('user:id,name,email')
            ->get();

        return inertia('Admin/Support/Show', [
            'ticket' => $ticket,
            'replies' => $replies
        ]);
    }

    public function reply(SupportTicketReplyRequest $request, $id)
    {
        $ticket = SupportTicket::findOrFail($id);

        $ticket->status = SupportTicket::STATUS_SUPPORT_REPLY;
        $ticket->save();

        $reply = $ticket->replies()->create([
            'content' => $request->input('content')
        ]);

        $reply->user_id = $request->user()->id;
        $reply->save();

        Mail::to($ticket->user)->send(new TicketRepliedToEmail($ticket));

        return redirect()->route('admin.support.index');
    }

    public function close(Request $request, $id)
    {
        $ticket = SupportTicket::findOrFail($id);

        $ticket->status = SupportTicket::STATUS_CLOSED;
        $ticket->save();

        return redirect()->route('admin.support.index')->with('success', __('Support ticket has been closed'));
    }
}
