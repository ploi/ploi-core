<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SupportTicket;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\SupportTicketRequest;
use App\Http\Requests\SupportTicketReplyRequest;
use App\Mail\Support\NotifyEmailsAboutNewTicket;

class SupportController extends Controller
{
    public function index()
    {
        return inertia('Support/Index', [
            'tickets' => auth()->user()
                ->supportTickets()
                ->where('status', '!=', SupportTicket::STATUS_CLOSED)
                ->latest()
                ->paginate()
        ]);
    }

    public function indexClosed()
    {
        return inertia('Support/Closed', [
            'tickets' => auth()->user()->supportTickets()->closed()->latest()->paginate()
        ]);
    }

    public function store(SupportTicketRequest $request)
    {
        $ticket = $request->user()->supportTickets()->create($request->validated());

        if ($emails = setting('support_emails')) {
            foreach (explode(',', $emails) as $email) {
                Mail::to($email)->send(new NotifyEmailsAboutNewTicket($ticket));
            }
        }

        return redirect()->route('support.index')->with('success', __('Thank you for submitting your support request.'));
    }

    public function show($id)
    {
        $ticket = auth()->user()->supportTickets()
            ->with('user:id,name,email')
            ->findOrFail($id);

        return inertia('Support/Show', [
            'ticket' => $ticket,
            'replies' => $ticket->replies()->with('user:id,name,email')->oldest()->paginate()
        ]);
    }

    public function reply(SupportTicketReplyRequest $request, $id)
    {
        $ticket = $request->user()->supportTickets()
            ->findOrFail($id);

        $ticket->status = SupportTicket::STATUS_CUSTOMER_REPLY;
        $ticket->save();

        $reply = $ticket->replies()->create([
            'content' => $request->input('content')
        ]);

        $reply->user_id = $request->user()->id;
        $reply->save();

        return redirect()->route('support.show', $id);
    }

    public function close(Request $request, $id)
    {
        $ticket = $request->user()->supportTickets()
            ->findOrFail($id);

        $ticket->status = SupportTicket::STATUS_CLOSED;
        $ticket->save();

        return redirect()->route('support.index')->with('success', __('Support ticket has been closed'));
    }
}
