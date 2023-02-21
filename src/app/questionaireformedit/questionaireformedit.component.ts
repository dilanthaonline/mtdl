import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-questionaireformedit',
  templateUrl: './questionaireformedit.component.html',
  styleUrls: ['./questionaireformedit.component.scss'],

})
export class QuestionaireformeditComponent {


  constructor (private _formBuilder:FormBuilder, private router:Router, public dialog: MatDialog){}


  loadModule(pageName:string):void{
    this.router.navigate([`${pageName}`]);
}

panelOpenState = false;
q1answers: string[] = ['Presice cutting line', 'Pressure point is good', 'Made by Nano Technology', 'Metal is new CR mixed'];
q2answers: string[] = ['Presice cutting line', 'Pressure point is good', 'Made by Nano Technology', 'Metal is new CR mixed'];
q3answers: string[] = ['Presice cutting line', 'Pressure point is good', 'Made by Nano Technology', 'Metal is new CR mixed'];

firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
thirdFormGroup: FormGroup = this._formBuilder.group({thirdCtrl: ['']});


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
