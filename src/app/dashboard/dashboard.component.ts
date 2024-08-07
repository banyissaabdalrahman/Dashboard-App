import { Component } from '@angular/core';
import { DashboardItemComponent } from "./dashboard-item/dashboard-item.component";
import { TicketComponent } from "./tickets/tickets.component";
import { ServerStatusComponent } from "./server-status/server-status.component";
import { TrafficComponent } from "./traffic/traffic.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardItemComponent, TicketComponent, ServerStatusComponent, TrafficComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent { }
