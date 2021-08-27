import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginMenuPage } from './login-menu.page';

const routes: Routes = [
  {
    path: '',
    component: LoginMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginMenuPageRoutingModule {}
