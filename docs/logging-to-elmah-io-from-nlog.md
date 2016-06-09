# Logging from NLog

NLog is one of the most popular logging frameworks for .NET. With an active history on almost 10 years, the possibilities with NLog are many and it’s easy to find documentation on how to use it.

To start logging messages from NLog to elmah.io, you need to install the elmah.io.nlog NuGet package:

```powershell
Install-Package elmah.io.nlog
```

To configure the elmah.io target, add the following configuration to your app.config/web.config/nlog.config depending on what kind of project you’ve created:

```xml
<extensions>
  <add assembly="Elmah.Io.NLog"/>
</extensions>
 
<targets>
  <target name="elmahio" type="elmah.io" logId="cc6043e9-5d7b-4986-8056-cb76d4d52e5e"/>
</targets>
 
<rules>
  <logger name="*" minlevel="Info" writeTo="elmahio" />
</rules>
```

In the example we specify the level minimum as Info. This tells NLog to log only information, warning, error and fatal messages. You may adjust this but be aware, that your elmah.io log may run full pretty fast, if you log thousands and thousands of trace and debug messages.

Log messages to elmah.io, just as with every other target and NLog:

```csharp
log.Warn("This is a warning message");
log.Error(new Exception(), "This is an error message");
```