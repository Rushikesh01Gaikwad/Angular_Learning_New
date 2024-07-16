import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './component/template-driven/template-driven.component';

const routes: Routes = [
  {path:'', component:TemplateDrivenComponent},
  {path:'reactive', component:ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
