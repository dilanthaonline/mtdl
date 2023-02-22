import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaireFormEditComponent } from './questionaire-form-edit.component';

describe('QuestionaireFormEditComponent', () => {
  let component: QuestionaireFormEditComponent;
  let fixture: ComponentFixture<QuestionaireFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionaireFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionaireFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
