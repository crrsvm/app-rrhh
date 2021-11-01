import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantallaIntroPageRoutingModule } from './pantalla-intro-routing.module';

import { PantallaIntroPage } from './pantalla-intro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantallaIntroPageRoutingModule
  ],
  declarations: [PantallaIntroPage]
})
export class PantallaIntroPageModule {}
