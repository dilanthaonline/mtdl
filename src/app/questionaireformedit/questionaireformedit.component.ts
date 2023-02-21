import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionaireformedit',
  templateUrl: './questionaireformedit.component.html',
  styleUrls: ['./questionaireformedit.component.scss']
})
export class QuestionaireformeditComponent {

  constructor (private router:Router){}
  panelOpenState = false;

  loadModule(pageName:string):void{
    this.router.navigate([`${pageName}`]);

}
}
