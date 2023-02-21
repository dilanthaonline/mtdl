import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-questionaireformedit',
  templateUrl: './questionaireformedit.component.html',
  styleUrls: ['./questionaireformedit.component.scss'],

})
export class QuestionaireformeditComponent {

  constructor (private router:Router, public dialog: MatDialog){}
  panelOpenState = false;

  loadModule(pageName:string):void{
    this.router.navigate([`${pageName}`]);
}


openDialog() {
  const dialogRef = this.dialog.open(DialogContentExampleDialog);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}

@Component({
  selector: 'videopreview-dialog',
  templateUrl: 'videopreview-dialog.html',
})

export class DialogContentExampleDialog {}
