# Days Without Incidents API

## Development

### Requirements:

- ASP.NET Core 2.2
- [PagerDuty API Key](https://support.pagerduty.com/docs/generating-api-keys).

### Running the API:

1. Set your PagerDuty API Key using the dotnet secrets manager:

```
dotnet user-secrets set "PagerDutyApi:ApiKey" "<pagerduty_api_key>" --project "<path_to_cloned_repo>/days-without-incidents-api"
```

2. Trust the local self signed certificate:
```
dotnet dev-certs https --trust
```

3. Build and Run the project:

```
cd <path_to_cloned_repo>/days-without-incidents-api
dotnet build
dotnet run
```