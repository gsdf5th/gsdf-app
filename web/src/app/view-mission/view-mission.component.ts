import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-view-mission',
  templateUrl: './view-mission.component.html',
  styleUrls: ['./view-mission.component.css']
})
export class ViewMissionComponent implements OnInit {
  missions: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.missions = db.list('/missions');
  }

  ngOnInit() {
  }

}
