import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

  constructor(private missionSvc: MissionService) { }

  ngOnInit() {
  }

  createMission() {
    this.missionSvc.createMission(this.mission)
    this.mission = new Mission();
  }

}
