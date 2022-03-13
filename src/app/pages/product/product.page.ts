import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  @Input() product = new Product();
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.product);
  }


  goBack(){
    this.modalController.dismiss();
  }

}
