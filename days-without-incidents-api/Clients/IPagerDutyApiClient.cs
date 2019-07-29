using System.Threading.Tasks;
using days_without_incidents_api.Models;

namespace days_without_incidents_api.Clients
{
    public interface IPagerDutyApiClient
    {
        Task<PagerDutyApiListIncidentsResponse> GetPagerDutyApiIncidentsList();
    }
}
