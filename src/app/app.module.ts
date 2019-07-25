import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClarityModule } from "@clr/angular";
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule,  } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, ClarityModule, FormsModule, HttpClientModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
