import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
   public notificationState: any;
   public dynamicClass: String = 'danger';
   public subs: Subscription;
  constructor(public appService: AppService) { }

  ngOnInit() {
    this.subs = this.appService.notifyObservable.subscribe(res => {
      this.notificationState = res;
      if (this.notificationState.status === 200) {
        this.dynamicClass = 'success';
      } else {
        this.dynamicClass = 'danger';
      }
    });
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }


}
