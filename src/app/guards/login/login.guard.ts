import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ){}

  canActivate(): Promise<any>{
    return new Promise(async resolve => {
      this.auth.userStatus().then((userRes) => {
        if (userRes) {
          resolve(true);
        }else{
          this.router.navigate(['/login-menu']);
          resolve(false);
        }
      })
    }).catch((error) => {
      this.router.navigate(['/login-menu']);
      console.log(error);
    });
  }
  
}
