import { Component } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { NavigationExtras, Router } from '@angular/router';
import { FirestoreService } from '../service/firestore/firestore.service';
import { User } from '../models/user';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user = new User();
  nightTheme = true;
  saleProducts = [];
  commerceSale = [];
  allCommerces = [];
  constructor(
    private firestore: FirestoreService,
    private auth: AuthService,
    private router: Router,
  ) {

  }

  ngOnInit(){
    this.auth.getUser().then((res) => {
      console.log(res);
      this.user = res[0];
    });
  }

  ionViewDidEnter() {
    this.loadTopCommerce();
    this.loadProductsSales();
  }

  slideOpts = {
    initialSlide: 2,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 400,
  };

  slideSales = {
    autoplay: {
      delay:3000
    }
  };

  loadProductsSales(){
    this.firestore.getWhere1('product','isSale',true).subscribe(res => {
      this.saleProducts = res;
      this.saleProducts.forEach(item => {
        console.log(item.commerce_uid);
        this.firestore.getWhere1('commerce','uid',item.commerce_uid).subscribe(res2 => {
          this.commerceSale.push(res2[0]);
        });
      });
    });
  }

  loadTopCommerce(){
    this.firestore.getAll('commerce').subscribe((res) => {
      console.log(res);
      this.allCommerces = res;
    });
  }

  goToCommerce(commerce){
    console.log(commerce.name);
    const params = {
      uid:commerce.uid,
      name: commerce.name,
      category: commerce.category,
      image: commerce.image
    };

    const navigationExtras: NavigationExtras = {queryParams: {special: JSON.stringify(params)}};
    this.router.navigate(['/commerce'],navigationExtras);
  }
}
