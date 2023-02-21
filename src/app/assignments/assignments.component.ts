import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent {
  constructor (private router:Router){}

  loadModule(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }
}
