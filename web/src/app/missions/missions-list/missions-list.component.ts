import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { Mission } from '../shared/mission';
import { MissionService } from '../shared/mission.service'

@Component({
  selector: 'missions-list',
  templateUrl: './missions-list.component.html',
  styleUrls: ['./missions-list.component.css'],
  providers: [MissionService]
})
export class MissionsListComponent implements OnInit {

  public missions: FirebaseListObservable<Mission[]>;

  constructor(private missionSvc: MissionService) { }

  ngOnInit() {
    this.missions = this.missionSvc.getMissionList({limitToLast: 5})
  }
  deleteMissions() {
    this.missionSvc.deleteAll()
  }
  deleteItem(key) {
    this.missionSvc.deleteMission(key)
  }

}
