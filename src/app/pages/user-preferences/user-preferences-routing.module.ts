import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPreferencesPage } from './user-preferences.page';

const routes: Routes = [
  {
    path: '',
    component: UserPreferencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPreferencesPageRoutingModule {}
