import { Component } from '@angular/core';
import { AuthService } from '../service/auth/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private auth: AuthService,
    private route: Router,
  ) {
   /*  this.auth.userStatus().then(user => {
      if (user) {
       console.log("USER BELOW");
       console.log(user);
      }else{
        this.route.navigate(['/login-menu']);
      }
     }).catch(error => {
       console.log("ERROR LOG");
       console.log(error);
     }); */
  }

  
}
