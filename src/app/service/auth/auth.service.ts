import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import { User } from '../../models/user';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new User();
  constructor(
    private afAuth:AngularFireAuth,
    private firestore: FirestoreService,
  ) { }

  public registerWithEmail(email:string,password:string): Promise<any>{
    return new Promise((resolve,reject) => {
      this.afAuth.createUserWithEmailAndPassword(email,password).then((res1) => {
        resolve(res1);
      }).catch(function (error){
        reject(error);
        console.log(error);
      });
    });
  }

  public loginWithEmail(email:string, password:string): Promise<any>{
    return new Promise((resolve,reject) => {
      this.afAuth.signInWithEmailAndPassword(email,password).then(res => {
        resolve(res);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  public sendVerificationEmail(): Promise<any>{
    return new Promise((resolve,reject) => {
      this.afAuth.authState.subscribe(user => {
        user.sendEmailVerification().then((value) => {
          resolve(value);
        }).catch(error => {
          reject(error);
        });
      });
    });
  }

  public userStatus(): Promise<any>{
    return new Promise((resolve,reject) => {
      this.afAuth.onAuthStateChanged(user => {
        console.log(user);
        resolve(user);
      }).catch(error => {
        reject(error);
      });
    });
  }

  public getUser():Promise<any>{
    return new Promise((resolve,reject) => {
      this.afAuth.onAuthStateChanged(user => {
        this.firestore.getWhere1('user','uid',user.uid).subscribe(res => {
          resolve(res);
        });
      }).catch(error => {
        reject(error);
      });
    })
  }

  public logout():Promise<any>{
    return new Promise((resolve,reject) => {
      this.afAuth.signOut().then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  }
}
