import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: Boolean = false;
  currentUser = {};
  constructor(private http: HttpClient) { }


  login(cred: any): Observable<any> {
   return this.http.post('/rest-auth/login/', cred);
  }

  setLoggedIn() {
     this.isLoggedIn = true;
  }

}
