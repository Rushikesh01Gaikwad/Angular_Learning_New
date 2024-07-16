import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from '../component/navbar/navbar.component';

console.log("admin loaded successfully")

@NgModule({
  declarations: [
    LoginComponent,
    ListComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
