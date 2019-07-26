import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./component/login/login.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { StoreListComponent } from './component/store-list/store-list.component';
import { StoreDetailsComponent } from './component/store-details/store-details.component';
import { StoreDetailsResolverService } from './services/store-details-resolver.service';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "dashboard", component: DashboardComponent, canActivate: [AuthGuardService], children: [
      { path: 'list', component: StoreListComponent },
      { path: 'store-details/:id', component: StoreDetailsComponent,
      resolve: { 'stores-details': StoreDetailsResolverService } },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  },
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
