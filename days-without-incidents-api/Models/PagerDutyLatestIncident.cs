﻿using System;

namespace days_without_incidents_api.Models
{
    public class PagerDutyLatestIncident
    {
        public PagerDutyLatestIncident()
        {
            Title = null;
            Date = null;
            DaysAgo = null;
            Status = null;
        }

        public PagerDutyLatestIncident(string title, DateTime? date, int? daysAgo, string status)
        {
            Title = title;
            Date = date;
            DaysAgo = daysAgo;
            Status = status;
        }

        public string Title { get; set; }

        public DateTime? Date { get; set; }

        public int? DaysAgo { get; set; }

        public string Status { get; set; }
    }
}
