import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Archivo } from '../uploads/file.modal';
import { Headers, Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadfileService {

  uplsURL = 'https://comprasapp-6da2f.firebaseio.com/uploads.json';
  uplURL = 'https://comprasapp-6da2f.firebaseio.com/uploads';

  private basePath = '/uploads';
  uploads: AngularFireList<Archivo[]>;

  constructor(public angularFireDatabase: AngularFireDatabase, private http: Http) { }

  pushUpload(upload: Archivo) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes * 100);
      },
      (error) => {
        console.log(error);
      },
      () => {
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload);
        this.postUpload(upload);
      }
    );
  }

  private saveFileData(upload: Archivo) {
    this.angularFireDatabase.list(`${this.basePath}/`).push(upload);
  }

  getUploads() {
    this.uploads = this.angularFireDatabase.list(this.basePath);
    return this.uploads;
  }

  deleteUpload(upload: Archivo) {
    this.deleteFileData(upload.$key)
           .then(() => {
             this.deleteFileStorage(upload.name);
           })
           .catch(error => console.log(error));
  }

  private deleteFileData(key: string) {
    return this.angularFireDatabase.list(`${this.basePath}/`).remove(key);
  }

  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }

  // prueba

  postUpload(upload: Archivo) {
    const newupl = JSON.stringify(upload);
    const headers = new Headers ({'ContentType' : 'aplication/json'});

    return this.http.post(this.uplsURL, newupl, {headers}).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }
}
