import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaireformeditComponent } from './questionaireformedit.component';

describe('QuestionaireformeditComponent', () => {
  let component: QuestionaireformeditComponent;
  let fixture: ComponentFixture<QuestionaireformeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionaireformeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionaireformeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
