using System.Threading.Tasks;
using days_without_incidents_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace days_without_incidents_api.Controllers
{
    [Route("api/incidents")]
    [ApiController]
    public class IncidentController : ControllerBase
    {
        private readonly IPagerDutyService _pagerDutyService;

        public IncidentController(IPagerDutyService pagerDutyService)
        {
            _pagerDutyService = pagerDutyService;
        }

        [HttpGet("latest")]
        public async Task<IActionResult> GetLatestIncidentAsync()
        {
            var latestIncident = await _pagerDutyService.GetLatestIncidentAsync();
            return Ok(latestIncident);
        }
    }
}
