import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamScheduleComponent } from './exam-schedule.component';

describe('ExamScheduleComponent', () => {
  let component: ExamScheduleComponent;
  let fixture: ComponentFixture<ExamScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamScheduleComponent]
    });
    fixture = TestBed.createComponent(ExamScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
