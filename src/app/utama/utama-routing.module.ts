import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtamaComponent } from './utama.component';

const routes: Routes = [
  {
    path:'',
    component:UtamaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtamaRoutingModule { }
