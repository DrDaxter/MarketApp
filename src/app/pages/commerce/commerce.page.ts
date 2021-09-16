import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Commerce } from 'src/app/models/commerce';
import { FirestoreService } from 'src/app/service/firestore/firestore.service';

@Component({
  selector: 'app-commerce',
  templateUrl: './commerce.page.html',
  styleUrls: ['./commerce.page.scss'],
})
export class CommercePage implements OnInit {
  commerce = new Commerce();
  products = [];
  constructor(
    private activateRouter: ActivatedRoute,
    private navController: NavController,
    private firestore: FirestoreService,
  ) { }

  ngOnInit() {
    this.activateRouter.queryParams.subscribe(params => {
      if (params && params.special) {
        let dataCommerce = JSON.parse(params.special);
        console.log(dataCommerce);
        this.commerce = dataCommerce;
      }
    });
  }

  ionViewDidEnter(){
    this.getProducts();
  }

  goBack(){
    this.navController.navigateRoot(['/tabs/tab1']);
  }

  getProducts(){
    this.firestore.getWhere1('product','commerce_uid',this.commerce.uid).subscribe(res => {
      console.log(res);
      this.products = res;
    });
  }
}
