# Logging through a HTTP proxy

You may find yourself in a situation, where your production web servers aren't allowing HTTP requests towards the public Internet. This also impacts the elmah.io client, which requires access to the URL https://api.elmah.io. A popular choice of implementing this kind of restriction nowadays, is through a HTTP proxy like squid.

Luckily the elmah.io client supports proxy configuration out of the box. Let’s look at how to configure a HTTP proxy through `web.config`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <configSections>
    <sectionGroup name="elmah">
      <section name="security" requirePermission="false" type="Elmah.SecuritySectionHandler, Elmah" />
      <section name="errorLog" requirePermission="false" type="Elmah.ErrorLogSectionHandler, Elmah" />
      <section name="errorMail" requirePermission="false" type="Elmah.ErrorMailSectionHandler, Elmah" />
      <section name="errorFilter" requirePermission="false" type="Elmah.ErrorFilterSectionHandler, Elmah" />
    </sectionGroup>
  </configSections>
  <elmah>
    <security allowRemoteAccess="false" />
    <errorLog type="Elmah.Io.ErrorLog, Elmah.Io" ApiKey="..." LogId="..." />
  </elmah>
  <system.net>
    <defaultProxy>
      <proxy usesystemdefault="True" proxyaddress="http://192.168.0.1:3128" bypassonlocal="False"/>
    </defaultProxy>
  </system.net>
</configuration>
```

The above example is of course greatly simplified.

The elmah.io client automatically picks up the `defaultProxy` configuration through the `system.net` element. `defaultProxy` tunnels every request from your server, including requests to elmah.io, through the proxy located on 192.18.0.1 port 3128 (or whatever IP/hostname and port you are using).
