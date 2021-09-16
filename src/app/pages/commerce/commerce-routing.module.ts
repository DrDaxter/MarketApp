import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommercePage } from './commerce.page';

const routes: Routes = [
  {
    path: '',
    component: CommercePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommercePageRoutingModule {}
