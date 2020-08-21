import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitComponent } from "./components/unit/unit.component";
import { Unit1Component } from "./components/unit1/unit1.component";
import { Unit2Component } from "./components/unit2/unit2.component";
import { Unit3Component } from "./components/unit3/unit3.component";
import { Unit4Component } from "./components/unit4/unit4.component";
import { Unit5Component } from "./components/unit5/unit5.component";
import { Unit6Component } from "./components/unit6/unit6.component";
import { Unit7Component } from "./components/unit7/unit7.component";
import { WebdevComponent } from "./components/webdev/webdev.component";

export const routes: Routes = [
  {
    path: '',
    component: UnitComponent,
    children: [
      { path: "unit1", component: Unit1Component },
      { path: "unit2", component: Unit2Component },
      { path: "unit3", component: Unit3Component },
      { path: "unit4", component: Unit4Component },
      { path: "unit5", component: Unit5Component },
      { path: "unit6", component: Unit6Component },
      { path: "unit7", component: Unit7Component },
      { path: "webdev", component: WebdevComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitsRoutingModule { }
