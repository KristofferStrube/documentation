# Tips and tricks to stay below your message limit

Each plan on elmah.io include a maximum number of messages per month. The number of messages are calculated from how many times your applications have called our API and successfully stored a message (in most cases messages equals errors). Deleting messages either one by one or in batches are fully supported, but do not result in a decrease in the current message count. Our costs are primarily around receiving, indexing and notifying about messages, why we cannot allow someone on a lower plan like the Small Business, to log millions and yet millions of messages and then just clean up regularly. We're sure that everyone understand the challenge here.

With that said, we want to help you stay within your message limits. Luckily, there's a lot of ways to limit messages. This article contains a list of the most common tactics to staying below your message limit.

## Ignore Rules

The easiest way to limit logged messages, is by ignoring some of them. Ignored messages do not count towards the message limit. Message rules can be configured through the Rules tab on the Log Settings view.

Rules consist of a query and an action. The query can either be a full-text query or written using Lucene Query Syntax. To create a new ignore rule, input a query on the Rules tab:

![Create Ignore Rule](/images/create_ignore_rule.png)

All new rules are created with an ignore action as default, why you don't need to click the *Then* link for this type of rules. The example above, ignore all messages with a status code of `404`.

For more information about the possibilities with rules, check out [Creating Rules to Perform Actions on Messages](https://docs.elmah.io/creating-rules-to-perform-actions-on-messages/).

## Filters

Filters are basically Ignore Rules in disguise. With Filters we have collected the most common ignore rules and made them available as a set of checkboxes. To ignore all message matching a specific filter, enable one of the checkboxes on the Filters tab on Log Settings:

![Filters](/images/filters.png)

## Ignore future messages like this

Sometimes you may find yourself on the Search tab with a search result thinking: "I don't really care about these messages". By clicking the caret next to the query filters, an *Ignore future messages like this* option is revealed:

![Ignore Like This](/images/ignore_like_this.png)

Clicking this option automatically ignore any future messages matching your current search result.

## Disable logs

Each log can be disabled from Log Settings:

![Enabled/Disable Log](/images/enabled_disable_log.png)

Disables logs are shown as semi transparent on the dashboard, to help you remember that you disabled a log.

## Client-side message filtering

Most of our clients support client filtering. All of the filtering options described above, filters messages server-side. This means that your application still communicates with elmah.io's API and need to wait for that to answer (even fore ignored messages).

Filtering client-side from ASP.NET, MVC, Web API and other frameworks built on top of ASP.NET, can be done using ELMAH's (the open source project) [filtering](https://code.google.com/p/elmah/wiki/ErrorFiltering) feature. To filter message, create a method named `ErrorLog_Filtering` in the `Global.asax.cs` file:

```csharp
void ErrorLog_Filtering(object sender, ExceptionFilterEventArgs args)
{
    var httpContext = args.Context as HttpContext;
    if (httpContext.Response.StatusCode == 404)
    {
        args.Dismiss();
    }
}
```

If you're using ASP.NET Core, our client supports the `OnFilter` action:

```csharp
services.AddElmahIo(o =>
{
    ...
    o.OnFilter = message =>
    {
        return message.StatusCode == 404;
    };
});
```

## Monitor current usage

We send you an email when you have used 90% of your limit and again when reaching the limit. Monitoring your usage is a good supplement to the emails, since you are able to react early on (by upgrading, ignoring errors or something else). There's a usage graph on the Organisation Settings view:

![Usage Graph](/images/usage_graph.png)

By clicking the question mark next to the counter, you will be able to see which logs that are taking up space:

![Detailed Usage Report](/images/detailed-usage-report.png)

## Fix bugs

Seeing the same error over and over again? Maybe the best idea is to fix it :) I mean, that's the whole purpose of elmah.io: to help you fix bugs. And remember, the less bugs you have, the cheaper elmah.io gets. The ultimate motivation!