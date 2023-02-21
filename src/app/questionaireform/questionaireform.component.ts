import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionaireform',
  templateUrl: './questionaireform.component.html',
  styleUrls: ['./questionaireform.component.scss'],

})
export class QuestionaireformComponent {
  panelOpenState = false;
  q1answers: string[] = ['Presice cutting line', 'Pressure point is good', 'Made by Nano Technology', 'Metal is new CR mixed', 'Hair thin Sharpen'];

  constructor (private router:Router){}
  loadModule(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
