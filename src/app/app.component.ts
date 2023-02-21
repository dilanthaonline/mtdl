import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mtdl';


   //hiding info box
   visible:boolean = false


   //onclick toggling both
   onclick()
   {
     this.visible = !this.visible
   }


  constructor (private router:Router){}
  panelOpenState = false;

  loadModule(pageName:string):void{
    this.router.navigate([`${pageName}`]);

}

}
