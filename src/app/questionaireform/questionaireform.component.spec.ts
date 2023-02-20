import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaireformComponent } from './questionaireform.component';

describe('QuestionaireformComponent', () => {
  let component: QuestionaireformComponent;
  let fixture: ComponentFixture<QuestionaireformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionaireformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionaireformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
