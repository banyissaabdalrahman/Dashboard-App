import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // interval?:number;
  // private destroyRef = inject(DestroyRef);
  

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();
      console.log(rnd);
      if (rnd < 0.5) this.currentStatus = 'online';
      else if (rnd < 0.9) this.currentStatus = 'offline';
      else this.currentStatus = 'unknown';
    }, 5000);

    // Clean up the interval using DestroyRef method (Angular > 16)
    // this.destroyRef.onDestroy(
    //   () => clearInterval(interval)
    // );
  }

  // Clean up the interval using ngOnDestroy() method (Angular < 16)
  // ngOnDestroy() {
  //   if(this.interval)
  //     clearInterval(this.interval);
  // }
}
