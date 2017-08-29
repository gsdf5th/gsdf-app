import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  missions: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.missions = db.list('/missions');
  }

  ngOnInit() {
  }

}
