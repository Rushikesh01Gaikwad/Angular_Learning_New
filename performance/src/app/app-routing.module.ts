import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  {
    path: 'admin', loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path: '', component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})], //use custompreloading services if you want to give perticular module preloading.
  exports: [RouterModule]
})
export class AppRoutingModule { }
