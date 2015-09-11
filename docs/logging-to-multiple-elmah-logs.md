# Logging to multiple logs

Unfortunately, ELMAH doesn’t support multiple log targets like other logging frameworks like Serilog. This makes logging to multiple logs a bit tricky, but no way impossible. Let’s say that you’re using ELMAH in your web application and configured it to log everything in SQL Server. If you look through your `web.config` file, you will have code looking like this somewhere:

```xml
<elmah>
    <errorLog type="Elmah.SqlErrorLog, Elmah" connectionStringName="elmah"/>
</elmah>
```

As you probably know, this tells ELMAH to log all uncatched errors in SQL Server with the connection string “elmah”. You cannot add more `<errorLog>` elements, why logging to a second log seems impossible. Meet ELMAH’s Logged event, which is a great hook to log to multiple targets. Install the [elmah.io.core](http://www.nuget.org/packages/elmah.io.core/) NuGet package and add the following code to your `global.asax.cs` file:

```csharp
void ErrorLog_Logged(object sender, ErrorLoggedEventArgs args)
{
    var elmahIoLog = new Elmah.Io.ErrorLog(new Logger(new Guid("insert your log id")));
    elmahIoLog.Log(args.Entry.Error);
}
```

In the above code, we listen for the Logged event by simply declaring a method named `ErrorLog_Logged`. When called we create a new (Elmah.Io.)ErrorLog instance with the GUID of your log at elmah.io. Next we simply call the Log method with a new Error object. Bam! The error is logged both in SQL Server and in elmah.io.

If you only want to log certain types of errors in elmah.io, but everything to your normal log, you can extend your code like this:

```csharp
void ErrorLog_Logged(object sender, ErrorLoggedEventArgs args)
{
    if (args.Entry.Error.StatusCode == 500)
    {
        var elmahIoLog = new Elmah.Io.ErrorLog(new Logger(new Guid("insert your log id")));
        elmahIoLog.Log(args.Entry.Error);
    }
}
```

This time we only begin logging to elmah.io, if the thrown exception is of type `HttpException` and contains a HTTP status code of `500`.