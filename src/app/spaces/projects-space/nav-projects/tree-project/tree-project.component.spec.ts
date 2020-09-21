import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeProjectComponent } from './tree-project.component';

describe('TreeProjectComponent', () => {
  let component: TreeProjectComponent;
  let fixture: ComponentFixture<TreeProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
