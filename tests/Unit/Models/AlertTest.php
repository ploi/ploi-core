<?php

use App\Models\Alert;

it('can output the message in Markdown', function () {
    $alert = Alert::factory()
        ->message(<<<MARKDOWN
        **This is a bold message**

        Adding a line break as well.
        And a new line.
        MARKDOWN)
        ->create();

    expect($alert->messageHtml)
        ->toBe("<p><strong>This is a bold message</strong></p><br /><p>Adding a line break as well.<br />And a new line.</p>");
});
