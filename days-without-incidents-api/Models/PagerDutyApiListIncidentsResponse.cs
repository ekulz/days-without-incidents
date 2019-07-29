using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace days_without_incidents_api.Models
{
    public class PagerDutyApiListIncidentsResponse
    {
        public class IncidentsList
        {
            [JsonProperty("title")]
            public string Title { get; set; }

            [JsonProperty("created_at")]
            public DateTime CreatedAt { get; set; }
        }

        [JsonProperty("incidents")]
        public IEnumerable<IncidentsList> Incidents { get; set; }
    }
}