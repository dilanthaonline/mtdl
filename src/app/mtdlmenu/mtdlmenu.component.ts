import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mtdlmenu',
  templateUrl: './mtdlmenu.component.html',
  styleUrls: ['./mtdlmenu.component.scss']
})
export class MtdlmenuComponent {

  constructor (private router:Router){}

  loadModule(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }


}
