import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { environment } from '../environments/environment';
import { CreateMissionComponent } from './create-mission/create-mission.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './users/profile/profile.component';
import { ViewMissionComponent } from './view-mission/view-mission.component';
import { MissionsListComponent } from './missions/missions-list/missions-list.component';
import { MissionsDetailComponent } from './missions/missions-detail/missions-detail.component';
import { MissionsFormComponent } from './missions/missions-form/missions-form.component';

RouterModule.forRoot([
  {
    path: '/',
    component: AppComponent
  }
])

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreateMissionComponent,
    HomeComponent,
    ProfileComponent,
    ViewMissionComponent,
    MissionsListComponent,
    MissionsDetailComponent,
    MissionsFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'gsdf'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

