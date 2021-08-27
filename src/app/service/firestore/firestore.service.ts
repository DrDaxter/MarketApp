import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private afs:AngularFirestore,
  ) { }

  public save<T>(collection:string, document): Promise<any>{
    document.uid = document.uid != null && document.uid != undefined && document.uid != '' ? document.uid : this.afs.createId();
    return this.afs.doc<T>(`${collection}/${document.uid}`).set(document);
  }
}
