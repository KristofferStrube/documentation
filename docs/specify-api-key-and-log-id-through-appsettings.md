# Specify API key and log ID through appSettings

```xml
<appSettings>
    <add key="apiKeyRef" value="API_KEY" />
    <add key="logIdRef" value="LOG_ID" />
</appSettings>
...
<elmah>
    <errorLog type="Elmah.Io.ErrorLog, Elmah.Io" apiKeyKey="apiKeyRef" logIdKey="logIdRef" />
</elmah>
```

Unlike the first example, the term _Key_ has been appended to both the `apiKey` and `logId` attributes. The values of those attributes needs to match a key specified in `appSettings` (in this example _apiKeyRef_ and _logIdRef_). How you choose to name these keys is entirely up to you, as long as the names match.

elmah.io now picks up your API key ([Where is my API key?](https://docs.elmah.io/where-is-my-api-key/)) and log ID ([Where is my log ID?](https://docs.elmah.io/where-is-my-log-id/)) from the `appSettings` element and can be overwritten on your production site on Azure.