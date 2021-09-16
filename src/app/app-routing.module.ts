import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login/login.guard';

const routes: Routes = [
  /* { path: '', redirectTo: 'login', pathMatch: 'full' }, */
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'user-preferences',
    loadChildren: () => import('./pages/user-preferences/user-preferences.module').then( m => m.UserPreferencesPageModule)
  },
  {
    path: 'login-menu',
    loadChildren: () => import('./pages/login-menu/login-menu.module').then( m => m.LoginMenuPageModule)
  },
  {
    path: 'commerce',
    loadChildren: () => import('./pages/commerce/commerce.module').then( m => m.CommercePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
