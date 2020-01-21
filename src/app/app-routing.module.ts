import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';


const routes: Routes = [
  {path:'',component:DynamicInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
