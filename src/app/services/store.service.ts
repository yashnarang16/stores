import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(public http: HttpClient) { }


  getAllStores(): Observable<any> {
    return this.http.get('/stores/');
  }

  getStoreHours(storeId: string): Observable<any> {
   const url = '/places/place/{storeId}/openinghours/'.replace('{storeId}', storeId);
   return this.http.get(url);
  }

  updateStoreHours(storeId: string, value: any[]) {
    const url = '/places/place/{storeId}/openinghours/'.replace('{storeId}', storeId);
    return this.http.patch(url, value);
  }

  getPlotData(date: any) {
    let params = new HttpParams();
    params = params.append('visits', "true");
    params = params.append('from_date', this.changeDateFormat(date.from_date));
    params = params.append('to_date', this.changeDateFormat(date.to_date));
    return this.http.get('/stores/dashboard/plots/', { params: params });
  }

  changeDateFormat(date: string) {
    const split_date = date.split('/');
    return split_date[2] + '-' + split_date[0] + '-' + split_date[1];
  }

}
