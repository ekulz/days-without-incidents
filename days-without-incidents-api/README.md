# Days Without Incidents API

## Development

### Requirements:

- ASP.NET Core 2.2
- [PagerDuty API Key](https://support.pagerduty.com/docs/generating-api-keys)
- [Optional] Docker

### Development:

1. Set your PagerDuty API Key using the dotnet secrets manager:

```
cd <path_to_cloned_repo>/days-without-incidents-api

dotnet user-secrets set "PagerDutyApi:ApiKey" "<pagerduty_api_key>"
```

2. Build and Run the project:

```
cd <path_to_cloned_repo>/days-without-incidents-api

dotnet build
dotnet run
```

### Production:

Run the container, passing your PagerDuty API key as an environment variable. 

```
docker run -d -e PagerDutyApi__ApiKey='<pagerduty_api_key>' -p 8080:80 --name dayswithoutincidentsapi ekulz/days-without-incidents-api:latest
```

Visit `http://localhost:8080/ping`.