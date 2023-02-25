import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.scss'],


})
export class QuestionnaireFormComponent {
  panelOpenState = false;
  q1answers: string[] = ['Presice cutting line', 'Pressure point is good', 'Made by Nano Technology', 'Metal is new CR mixed'];
  q2answers: string[] = ['Presice cutting line', 'Pressure point is good', 'Made by Nano Technology', 'Metal is new CR mixed'];
  q3answers: string[] = ['Presice cutting line', 'Pressure point is good', 'Made by Nano Technology', 'Metal is new CR mixed'];
  constructor (private _formBuilder: FormBuilder, private router:Router){}

  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
  thirdFormGroup: FormGroup = this._formBuilder.group({thirdCtrl: ['']});

  loadModule(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }

}
