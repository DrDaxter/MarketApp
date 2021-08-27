import { Component } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserPreferencesPage } from '../pages/user-preferences/user-preferences.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private auth: AuthService,
    private router: Router,
    private modalController: ModalController,
  ) {

  }

  logout(){
    this.auth.logout().then(resolve => {
      this.router.navigate(['/login']);
    });
  }

  async goToUserPreferences(){
    const modal = await this.modalController.create({
      component: UserPreferencesPage,
    });
    return await modal.present();
  }
}
