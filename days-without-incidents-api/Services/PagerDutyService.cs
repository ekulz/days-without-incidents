using System;
using System.Linq;
using System.Threading.Tasks;
using days_without_incidents_api.Clients;
using days_without_incidents_api.Models;

namespace days_without_incidents_api.Services
{
    public class PagerDutyService : IPagerDutyService
    {
        private readonly IPagerDutyApiClient _pagerDutyApiClient;

        public PagerDutyService(IPagerDutyApiClient pagerDutyApiClient)
        {
            _pagerDutyApiClient = pagerDutyApiClient;
        }

        public async Task<PagerDutyLatestIncident> GetLatestIncidentAsync()
        {
            var incidentResponse = await _pagerDutyApiClient.GetPagerDutyApiIncidentsList();
            var pagerDutyIncident = new PagerDutyLatestIncident();

            if (incidentResponse.Incidents.Any())
            {
                var latest = incidentResponse.Incidents.OrderByDescending(i => i.CreatedAt).First();
                var daysSinceLatest = (DateTime.UtcNow - latest.CreatedAt).Days;
                pagerDutyIncident = new PagerDutyLatestIncident(latest.Title, latest.CreatedAt, daysSinceLatest);
            }

            return pagerDutyIncident;
        }
    }
}