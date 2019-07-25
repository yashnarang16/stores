import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

}
