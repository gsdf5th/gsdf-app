import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Mission } from '../shared/mission';
import { MissionService } from '../shared/mission.service';

@Component({
  selector: 'missions-form',
  templateUrl: './missions-form.component.html',
  styleUrls: ['./missions-form.component.css']
})
export class MissionsFormComponent implements OnInit {

  public isCollapsed = true;

  mission: Mission = new Mission();
  private sub = {};

  constructor(private missionSvc: MissionService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        if(params['showForm'] ){
          this.isCollapsed = false
        }
      });
  }


  createMission() {
    this.missionSvc.createMission(this.mission)
    this.mission = new Mission();
  }

}
