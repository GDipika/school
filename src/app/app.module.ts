import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', loadChildren: () => import('../app/auth/auth.module').then((x) => x.AuthModule) },
  { path: 'timetables', loadChildren: () => import('../app/time-table/time-table.module').then((x) => x.TimeTableModule) },
  { path: 'results', loadChildren: () => import('../app/results/results.module').then((x) => x.ResultsModule) },
  { path: 'examschedules', loadChildren: () => import('../app/exam-schedule/exam-schedule.module').then((x) => x.ExamScheduleModule) },
]
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
