import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MylessonsComponent } from './mylessons.component';

describe('MylessonsComponent', () => {
  let component: MylessonsComponent;
  let fixture: ComponentFixture<MylessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MylessonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MylessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
