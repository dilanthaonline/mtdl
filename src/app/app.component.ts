import { Component } from '@angular/core';


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

}
