import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mylessons',
  templateUrl: './mylessons.component.html',
  styleUrls: ['./mylessons.component.scss']
})
export class MylessonsComponent {
  constructor (private router:Router){}

  loadModule(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }
}
