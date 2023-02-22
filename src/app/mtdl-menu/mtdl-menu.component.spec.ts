import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtdlMenuComponent } from './mtdl-menu.component';

describe('MtdlmenuComponent', () => {
  let component: MtdlMenuComponent;
  let fixture: ComponentFixture<MtdlMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtdlMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtdlMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
