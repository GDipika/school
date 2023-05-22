import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamScheduleComponent } from './exam-schedule/exam-schedule.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:ExamScheduleComponent}
]

@NgModule({
  declarations: [
    ExamScheduleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExamScheduleModule { }
