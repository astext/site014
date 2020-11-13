import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LandingComponent } from "./landing/landing.component";
import { NotfoundComponent } from "./notfound/notfound.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "landing", component: LandingComponent },
   //{ path: "units", loadChildren: './modules/units/units.module#UnitsModule'},
   { path: `units`, loadChildren: () =>
   import(`./modules/units/units.module`).then(m => m.UnitsModule)},  
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
