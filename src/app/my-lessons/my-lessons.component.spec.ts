import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLessonsComponent } from './my-lessons.component';

describe('MylessonsComponent', () => {
  let component: MyLessonsComponent;
  let fixture: ComponentFixture<MyLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLessonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
