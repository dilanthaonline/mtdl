import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtdlmenuComponent } from './mtdlmenu.component';

describe('MtdlmenuComponent', () => {
  let component: MtdlmenuComponent;
  let fixture: ComponentFixture<MtdlmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtdlmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtdlmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
