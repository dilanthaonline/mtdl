import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
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
