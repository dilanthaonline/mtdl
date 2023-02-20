import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.scss']
})
export class QuestionnairesComponent {

  constructor (private router:Router){}

  loadModule(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }

}

