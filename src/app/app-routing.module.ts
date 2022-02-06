import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './autentikasi/login/login.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'utama'
  },
  {
    path:'autentikasi',
    loadChildren:()=>import('./autentikasi/autentikasi.module').then(module=>module.AutentikasiModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(module=>module.AdminModule)
  },
  {
    path:'utama',
    loadChildren:()=>import('./utama/utama.module').then(module=>module.UtamaModule)
  }
];
   
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }