import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSpaceComponent } from './projects-space.component';

describe('ProjectsSpaceComponent', () => {
  let component: ProjectsSpaceComponent;
  let fixture: ComponentFixture<ProjectsSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
