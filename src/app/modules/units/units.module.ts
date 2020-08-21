import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { UnitsRoutingModule } from './units-routing.module';
import { UnitComponent } from './components/unit/unit.component';
import { Unit1Component } from './components/unit1/unit1.component';
import { Unit2Component } from './components/unit2/unit2.component';
import { Unit3Component } from './components/unit3/unit3.component';
import { Unit4Component } from './components/unit4/unit4.component';
import { Unit5Component } from './components/unit5/unit5.component';
import { Unit6Component } from './components/unit6/unit6.component';
import { Unit7Component } from './components/unit7/unit7.component';
import { WebdevComponent } from './components/webdev/webdev.component';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    UnitsRoutingModule
  ],
  declarations: [
    UnitComponent,
    Unit1Component,
    Unit2Component,
    Unit3Component,
    Unit4Component,
    Unit5Component,
    Unit6Component,
    Unit7Component,
    WebdevComponent
  ]
})
export class UnitsModule { }