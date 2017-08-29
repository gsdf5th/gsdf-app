import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMissionComponent } from './view-mission.component';

describe('ViewMissionComponent', () => {
  let component: ViewMissionComponent;
  let fixture: ComponentFixture<ViewMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
