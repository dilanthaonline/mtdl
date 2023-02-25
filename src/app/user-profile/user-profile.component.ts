import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MtdlService } from '../mtdl.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public isRegister = false;
  public formData = new FormGroup({
    role: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    hospital: new FormControl(''),
    registrationNumber: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    postalCode: new FormControl(''),
    mobileNumber: new FormControl(''),
    telNumber: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private service: MtdlService) { }

  ngOnInit() {
    this.isRegister = this.router.url === '/register';
  }
  submit(data: any) {
    const loading = this.service.loading();
    this.service.addUpdateUser(data, this.isRegister).then((value) => {
      loading.close();
      this.router.navigate([this.isRegister ? 'login' : 'myDashboard']);
    }).catch((error) => {

    })
  }
  cancel() {
    this.router.navigate(['login'])
  }
}
