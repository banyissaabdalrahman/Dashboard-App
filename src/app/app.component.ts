import { Component } from '@angular/core';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DashboardComponent, HeaderComponent],
})
export class AppComponent {

}
