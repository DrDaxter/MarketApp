import { Component } from '@angular/core';
import { AuthService } from '../service/auth/auth.service'
import { Router } from '@angular/router'
import { FirestoreService } from '../service/firestore/firestore.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nightTheme = true;
  saleProducts = [];
  allCommerces = [];
  constructor(
    private firestore: FirestoreService
  ) {
    
  }

  ngOnInit(){
   this.loadCatToys(); 
  }

  ionViewDidEnter() {
    this.loadAllCommerces();
  }

  slideOpts = {
    initialSlide: 2,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 400,
  }

  slideSales = {
    autoplay: {
      delay:3000
    }
  }

  loadCatToys(){
    this.firestore.getWhere1('product','isSale',true).subscribe(res => {
      this.saleProducts = res;
      console.log(this.saleProducts);
    });
  }

  loadAllCommerces(){
    this.firestore.getAll('commerce').subscribe((res) => {
      console.log(res);
      this.allCommerces = res;
    });
  }

}
