import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Observable<firebase.User>;
  

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
  }

}
