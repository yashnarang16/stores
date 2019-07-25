import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./component/login/login.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
