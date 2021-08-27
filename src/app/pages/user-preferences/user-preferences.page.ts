import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-preferences',
  templateUrl: './user-preferences.page.html',
  styleUrls: ['./user-preferences.page.scss'],
})
export class UserPreferencesPage implements OnInit {
  nightTheme:boolean;
  constructor(
    private modalController: ModalController,
  ) { 
    
  }

  ngOnInit() {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(systemDark);
  }

  darkMode(){
    document.body.classList.toggle('dark');
  }

  toggleDark(){
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(systemDark);
    const setToggle = systemDark.matches;
    this.nightTheme = setToggle;
  }

  closeModal(){
    this.modalController.dismiss();
  }
}
