import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public sessionStorage: SessionStorageService, public router: Router) { }

  canActivate() {
    if (this.sessionStorage.getItem('Authorization')) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
