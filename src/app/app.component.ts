import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDmZ9_xJD8q9xBxDd4xgl2LKBT3h5lOT_8',
    authDomain: 'comprasapp-6da2f.firebaseapp.com',
    databaseURL: 'https://comprasapp-6da2f.firebaseio.com',
    projectId: 'comprasapp-6da2f',
    storageBucket: 'comprasapp-6da2f.appspot.com',
    messagingSenderId: '378104726739'
    });
  }

}
