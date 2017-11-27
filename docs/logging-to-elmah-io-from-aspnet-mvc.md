[![Build status](https://ci.appveyor.com/api/projects/status/j82k842uc26w2drg?svg=true)](https://ci.appveyor.com/project/ThomasArdal/elmah-io)
[![NuGet](https://img.shields.io/nuget/v/Elmah.Io.Mvc.svg)](https://www.nuget.org/packages/Elmah.Io.Mvc)
[![Samples](https://img.shields.io/badge/samples-1-brightgreen.svg)](https://github.com/elmahio/elmah.io/tree/api3.0/samples)

# Logging from ASP.NET MVC

Even though ELMAH works out of the box with ASP.NET MVC, ELMAH and MVC provides some features which interfere with one another. As usual, the great community around ELMAH have done something to fix this, by using the [Elmah.Mvc](https://www.nuget.org/packages/Elmah.MVC/) NuGet package. We've built a package for ASP.NET MVC exclusively, which installs all the necessary packages.

To start logging exceptions from ASP.NET MVC, install the NuGet package:

```powershell
Install-Package Elmah.Io.Mvc
```

During the installation, you will be asked for your API key ([Where is my API key?](https://docs.elmah.io/where-is-my-api-key/)) and log ID ([Where is my log ID?](https://docs.elmah.io/where-is-my-log-id/)). That's it. Every unhandled exception in ASP.NET MVC, is logged to elmah.io.

As part of the installation, we also installed `Elmah.MVC`, which adds some interesting logic around routing and authentication. Take a look in the `web.config` for application settings with the `elmah.mvc.` prefix. For documentation about these settings, check out the [Elmah.MVC project](https://github.com/alexbeletsky/elmah-mvc) on GitHub.

Since `Elmah.MVC` configures its own URL for accessing the ELMAH UI (just `/elmah` and not `/elmah.axd`), you can remove the `location` element in `web.config`, added by the `Elmah.Io.Mvc` NuGet package installer.