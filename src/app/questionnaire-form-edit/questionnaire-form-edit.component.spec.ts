import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireFormEditComponent } from './questionnaire-form-edit.component';

describe('QuestionnaireFormEditComponent', () => {
  let component: QuestionnaireFormEditComponent;
  let fixture: ComponentFixture<QuestionnaireFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnaireFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
