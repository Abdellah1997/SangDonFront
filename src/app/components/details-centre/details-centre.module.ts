import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsCentrePageRoutingModule } from './details-centre-routing.module';

import { DetailsCentrePage } from './details-centre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsCentrePageRoutingModule
  ],
  declarations: [DetailsCentrePage]
})
export class DetailsCentrePageModule {}
