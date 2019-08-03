using Microsoft.AspNetCore.Mvc;

namespace days_without_incidents_api.Controllers
{
    [ApiController]
    public class HealthController : ControllerBase
    {
        [HttpGet("ping")]
        public IActionResult GetPing() => Ok("Pong");
    }
}