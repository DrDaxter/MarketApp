import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from '../../models/User';
import { AuthService } from '../../service/auth/auth.service';
import { FirestoreService } from '../../service/firestore/firestore.service';
import * as CryptJs from 'crypto-js' 

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userModel = new User();
  private key = CryptJs.enc.Utf8.parse('4512631236589784');
  private iv = CryptJs.enc.Utf8.parse('4512631236589784');
  password:string = '';
  constructor(
    private auth: AuthService,
    private firestore: FirestoreService,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  registerUser(){
    this.auth.registerWithEmail(this.userModel.email, this.password).then(res => {
      console.log("step 1");
      if (res.additionalUserInfo.isNewUser) {
        console.log("step 2");
        this.userModel.uid = res.user.uid;
        this.firestore.save('user',{...this.userModel}).then((res2) => {
          console.log("step 3");
          this.sendEmailVerification();
          //this.registerAlert('Te has registrado exitosamente!');
        }).catch((error) => {
          this.registerAlert('Something went wrong trying to add new user, see the console');
          console.log(`error => ${error}`);
        });
      }else{
        console.log("in the else");
      }
    }).catch((error) => {
      this.registerAlert('Something went wrong with the registration, see the console');
      console.log(`error => ${error}`);
    });
  }

  sendEmailVerification(){
    this.auth.sendVerificationEmail().then((response) => {
      this.registerAlert("We send you an email to verificate");
    }).catch(error => {
      this.registerAlert("Something went wrong with the verification, see the console");
      console.log(error);
    });
  }

  async registerAlert(message){
    const alert = await this.alertController.create({
      header: 'Informacion de registro',
      message: message,
      buttons: ['Ok'],
    });
    alert.present();
  }

  encrypt(parameter) {
    var encrypted = CryptJs.AES.encrypt(CryptJs.enc.Utf8.parse(JSON.stringify(parameter)), this.key, {
        keySize: 128 / 8,
        iv: this.iv,
        mode: CryptJs.mode.CBC,
        padding: CryptJs.pad.Pkcs7
    });
    return encrypted;
}

}
