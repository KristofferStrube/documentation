# Export data from elmah.io to JSON

If you want to export data from elmah.io, we support this through the <a href="https://github.com/elmahio/Elmah.Io.Exporter" target="_blank" rel="noopener noreferrer">Elmah.Io.Export tool</a>. The tool is available on GitHub and should be built on an OS of your choice (the tool is implemented in .NET Core).

To export all data from a log, run the tool with the minimum number of parameters:

```powershell
dotnet Elmah.Io.Export.dll -ApiKey c7e049966ddf450f8ce6aeded7b581d0 -LogId 9f01ca78-174a-4a96-9f84-a336917a9deb
```

> Be sure to use an API key with the *Messages* > *Read* permission enabled.

The following switches are available:

|Name|Required|Default|Description|
|-|-|-|-|
|-ApiKey|<span class="fa fa-check"></span>||Your API key needed to access your subscription ([where is my API key?](https://docs.elmah.io/where-is-my-api-key/)).|
|-LogId|<span class="fa fa-check"></span>||The ID of the log you want to export from ([where is my log ID?](https://docs.elmah.io/where-is-my-log-id/)).|
|-Filename||`Export-{ticks}.json`|Name of the output file.|
|-DateFrom||`DateTime.Min`|Date and time in ISO8601 to export messages from.|
|-DateTo||`DateTime.Max`|Date and time in ISO8601 to export messages to.|
|-Query|||A lucene query to filter messages by. See [Query messages using full-text search](https://docs.elmah.io/query-messages-using-full-text-search/) for details.|
|-IncludeHeaders||`false`|Indicates if the output should include headers like cookies and server variables (runs slower).|