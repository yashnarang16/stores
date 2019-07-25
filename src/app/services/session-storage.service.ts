import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }


  setItem(key: string, value: any) {
    sessionStorage.setItem(key, value);
  }


  getItem(key: string) {
    return sessionStorage.getItem(key);
  }

  clearAll() {
    sessionStorage.clear();
  }

}
