import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundurlComponent } from '../notfoundurl/notfoundurl.component';
import { UtamaComponent } from './utama.component';

const routes: Routes = [
  {
    path:'',
    component:UtamaComponent
  },
  {
    path:'**',
    pathMatch: 'full',
    component:NotfoundurlComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtamaRoutingModule { }
