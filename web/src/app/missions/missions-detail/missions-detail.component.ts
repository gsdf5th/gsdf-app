import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { DatePipe } from '@angular/common';

import { Mission } from '../shared/mission';
import { MissionService } from '../shared/mission.service'

import { Roster } from '../shared/roster';

@Component({
  selector: 'mission-detail',
  templateUrl: './missions-detail.component.html',
  styleUrls: ['./missions-detail.component.css'],
  providers: [MissionService]
})
export class MissionsDetailComponent implements OnInit {
  missionDetails: FirebaseObjectObservable<Mission>;
  roster: FirebaseListObservable<Roster[]>
  rosterStatus: boolean;
  user: Observable<firebase.User>;
  private sub: any;
  id: string;
  show: boolean = true;

  constructor(private missionSvc: MissionService,
              private route: ActivatedRoute,
              public afAuth: AngularFireAuth) { 
                this.user = afAuth.authState;
               
              }

  addSignupStatus() {
    var userData = {
      displayName: this.afAuth.auth.currentUser.displayName,
      email: this.afAuth.auth.currentUser.email,
      phoneNumber: this.afAuth.auth.currentUser.phoneNumber
    }
    this.missionSvc.signupMission(this.id, this.afAuth.auth.currentUser.uid, userData)
  }

  removeSignupStatus() {
    //console.log(this.afAuth.auth.currentUser.uid)
    this.missionSvc.removeMissionSignup(this.id, this.afAuth.auth.currentUser.uid)
  }


  checkSignupStatus(missionDetails){
    //console.log(missionDetails)
      if(missionDetails.roster){
        if(missionDetails.roster[this.afAuth.auth.currentUser.uid]){
          this.rosterStatus = true
        }else{
            this.rosterStatus = false;
        }
      }else{
         this.rosterStatus = false;
      }

  }



  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
    this.missionDetails = this.missionSvc.getMission(this.id);
    this.roster = this.missionSvc.getRosterList(this.id)
    //this.rosterStatus = this.roster[this.afAuth.auth.currentUser.uid]
    this.missionDetails.subscribe(
          missionDetails => this.checkSignupStatus(missionDetails)
    );

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
