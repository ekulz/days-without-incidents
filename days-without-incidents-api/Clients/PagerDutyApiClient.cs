using System.Net.Http;
using System.Threading.Tasks;
using days_without_incidents_api.Models;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace days_without_incidents_api.Clients
{
    public class PagerDutyApiClient : IPagerDutyApiClient
    {
        private readonly IHttpClientFactory _clientFactory;
        private readonly IConfiguration _configuration;

        public PagerDutyApiClient(IHttpClientFactory clientFactory, IConfiguration configuration)
        {
            _clientFactory = clientFactory;
            _configuration = configuration;
        }

        public async Task<PagerDutyApiListIncidentsResponse> GetPagerDutyApiIncidentsList()
        {
            var pagerDutyApiSettings = _configuration.GetSection("PagerDutyApi");

            var request = new HttpRequestMessage(HttpMethod.Get, "https://api.pagerduty.com/incidents?service_ids[]=PMVS462");
            request.Headers.Add("Accept", "application/vnd.pagerduty+json;version=2");
            request.Headers.Add("Authorization", $"Token token={pagerDutyApiSettings["ApiKey"]}");

            var client = _clientFactory.CreateClient();

            var response = await client.SendAsync(request);
            response.EnsureSuccessStatusCode();

            var jsonResponse = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<PagerDutyApiListIncidentsResponse>(jsonResponse);
        }
    }
}
