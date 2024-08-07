import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  @Input({required:true}) imgPath!:string;
  @Input({required:true}) imgAltText!:string;
  @Input({required:true}) title!:string;
}
