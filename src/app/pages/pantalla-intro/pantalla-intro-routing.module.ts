import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantallaIntroPage } from './pantalla-intro.page';

const routes: Routes = [
  {
    path: '',
    component: PantallaIntroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantallaIntroPageRoutingModule {}
