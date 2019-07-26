import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SessionStorageService } from '../../services/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService, public sessionStorage: SessionStorageService, public router: Router) { }

  ngOnInit() {
  }


  logOut() {
    this.sessionStorage.clearAll();
    this.authService.logOut().subscribe(res => {
      if (res) {
        this.router.navigateByUrl('/login');
      }
    });
  }

}
