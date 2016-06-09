﻿# Logging from Console

Even though elmah.io support various logging frameworks like [Serilog](logging-to-elmah-io-from-serilog), [log4net](logging-to-elmah-io-from-log4net) and [NLog](logging-to-elmah-io-from-nlog), logging from a simple console application is dead simple.

To start logging, install the [elmah.io.client](https://www.nuget.org/packages/elmah.io.client/) NuGet package:

```powershell
Install-Package elmah.io.client
```

Create a new ```Logger```and assign it to a variable of type ```ILogger```:

```csharp
Elmah.Io.Client.ILogger logger = new Elmah.Io.Client.Logger(new Guid("LOGID"));
```

Replace ```LOGID``` with your log ID from elmah.io.

The elmah.io client supports logging in different log levels much like other logging frameworks for .NET:

```csharp
logger.Verbose("Verbose message");
logger.Debug("Debug message");
logger.Information("Information message");
logger.Warning("Warning message");
logger.Error("Error message");
logger.Fatal("Fatal message");
```