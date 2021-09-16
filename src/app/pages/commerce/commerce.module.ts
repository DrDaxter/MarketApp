import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommercePageRoutingModule } from './commerce-routing.module';

import { CommercePage } from './commerce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommercePageRoutingModule
  ],
  declarations: [CommercePage]
})
export class CommercePageModule {}
