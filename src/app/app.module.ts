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
import { StoreListComponent } from './component/store-list/store-list.component';
import { StoreDetailsComponent } from './component/store-details/store-details.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TimelineChartComponent } from './component/timeline-chart/timeline-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './component/alert/alert.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, StoreListComponent, StoreDetailsComponent,
    TimelineChartComponent, AlertComponent],
  imports: [BrowserModule, AppRoutingModule, ClarityModule, FormsModule, HttpClientModule, NgxChartsModule, BrowserAnimationsModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
