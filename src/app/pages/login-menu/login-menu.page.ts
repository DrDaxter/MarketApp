import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.page.html',
  styleUrls: ['./login-menu.page.scss'],
})
export class LoginMenuPage implements OnInit {

  options: AnimationOptions = {
    path: './assets/animation/product.json',
  };
  constructor(
    private route: Router,
    private animationController: AnimationController,
  ) { }

  ngOnInit() {
    //this.animate();
  }

  goToLogin(){
    console.log('click');
    this.route.navigate(['/login']);
  }

  animate(){
    const animation = this.animationController.create()
    .addElement(document.querySelector('.custom-shape-divider-bottom-1629518603'))
    .duration(4000)
    .iterations(Infinity)
    .fromTo('transform', 'translateX(0px)', 'translateX(-1200px)')
    .fromTo('opacity', '1', '1');

    animation.play();
  }

}
