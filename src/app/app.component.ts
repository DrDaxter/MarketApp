import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.darkTheme();
  }

  darkTheme(){
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  }
}