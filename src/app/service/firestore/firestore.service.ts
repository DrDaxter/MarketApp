import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore'
import { Observable } from 'rxjs';

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

  public getWhere1<T>(collection:string, key:string, value:any): Observable<any>{
    return this.afs.collection<T>(collection, ref => ref
      .where(key, '==', value)
    ).valueChanges();
  }

  public getWhere2<T>(collection:string, key1:string, value1:any, key2:string, value2:any): Observable<any>{
    return this.afs.collection<T>(collection, ref => ref
      .where(key1, '==', value1)
      .where(key2, '==', value2)
      ).valueChanges();
  }

  public getAll<T>(collection:string): Observable<any>{
    return this.afs.collection(collection).valueChanges();
  }
}
