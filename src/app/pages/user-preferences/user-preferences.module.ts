import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPreferencesPageRoutingModule } from './user-preferences-routing.module';

import { UserPreferencesPage } from './user-preferences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPreferencesPageRoutingModule
  ],
  declarations: [UserPreferencesPage]
})
export class UserPreferencesPageModule {}
