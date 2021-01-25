import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemanderPageRoutingModule } from './demander-routing.module';

import { DemanderPage } from './demander.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemanderPageRoutingModule
  ],
  declarations: [DemanderPage]
})
export class DemanderPageModule {}
