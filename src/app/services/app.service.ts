import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public notification = new Subject<any>();
  public notifyObservable = this.notification.asObservable();
  constructor() { }

}
