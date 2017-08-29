import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navbarCollapsed = true;
  user: Observable<firebase.User>;
  title = 'NetEOC';
  userdata: firebase.User;
  userID: string;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

    login() {
      console.log("login")
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
     console.log("logout")
    this.afAuth.auth.signOut();
  }

  updateProfileLink(user: firebase.User){
    this.userID = user.uid;
  }

  ngOnInit() {
    this.user.subscribe(
          user => this.updateProfileLink(user)
      );
  }

}
