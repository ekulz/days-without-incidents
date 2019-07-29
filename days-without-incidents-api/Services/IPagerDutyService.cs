using System.Threading.Tasks;
using days_without_incidents_api.Models;

namespace days_without_incidents_api.Services
{
    public interface IPagerDutyService
    {
        Task<PagerDutyLatestIncident> GetLatestIncidentAsync();
    }
}
