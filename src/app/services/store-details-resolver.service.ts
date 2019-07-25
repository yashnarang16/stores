import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { StoreService } from './store.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreDetailsResolverService implements Resolve<any> {

  constructor(public storeService: StoreService) { }
  resolve(activiateRoute: ActivatedRouteSnapshot) {
    const id = activiateRoute.params['id'] || '';
     return this.storeService.getStoreHours(id).pipe(map(res => {
       return res;
     }));
  }
}
