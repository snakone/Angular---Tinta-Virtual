import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCommentComponent } from './add-comment.component';

describe('AdminAddCommentComponent', () => {
  let component: AdminAddCommentComponent;
  let fixture: ComponentFixture<AdminAddCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
