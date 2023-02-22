import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mtdl-menu',
  templateUrl: './mtdl-menu.component.html',
  styleUrls: ['./mtdl-menu.component.scss']
})
export class MtdlMenuComponent {

  constructor (private router:Router){}

  loadModule(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }


}
