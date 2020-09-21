import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUpdaterComponent } from './task-updater.component';

describe('TaskUpdaterComponent', () => {
  let component: TaskUpdaterComponent;
  let fixture: ComponentFixture<TaskUpdaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskUpdaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
