import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginMenuPageRoutingModule } from './login-menu-routing.module';

import { LoginMenuPage } from './login-menu.page';

import { LottieModule } from 'ngx-lottie';

export function playerFactory() {
  return import('lottie-web'); 
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginMenuPageRoutingModule,
    LottieModule.forRoot({ player: playerFactory})
  ],
  declarations: [LoginMenuPage]
})
export class LoginMenuPageModule {}
