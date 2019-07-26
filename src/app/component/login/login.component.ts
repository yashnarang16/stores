import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SessionStorageService } from '../../services/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = {
    username: null,
    password: null
  };

  constructor(public authService: AuthService, public sessionStorage: SessionStorageService, public router: Router) { }

  ngOnInit() {
  }

  submit(user: any) {
    this.authService.login(user).subscribe(res => {
      if (res && res.key) {
        this.authService.currentUser = res;
        this.sessionStorage.setItem('Authorization', res.key);
        this.router.navigate(['dashboard']);
      }
    });
  }

}
