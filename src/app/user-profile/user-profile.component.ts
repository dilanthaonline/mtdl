import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRole } from '../interface';
import { MtdlService } from '../mtdl.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public isRegister = false;
  public formData: FormGroup = new FormGroup({
    id: new FormControl(-1),
    roleId: new FormControl(0),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    hospital: new FormControl(''),
    registrationNumber: new FormControl(''),
    address: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    postalCode: new FormControl(),
    mobileNumber: new FormControl(),
    landline: new FormControl(),
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  UserRole = UserRole;

  constructor(private router: Router, private service: MtdlService) { }

  ngOnInit() {
    this.isRegister = this.router.url === '/register';
    if (!this.isRegister) {
      const loading = this.service.loading();
      this.service.getUser().then((value) => {
        this.formData = new FormGroup({
          id: new FormControl(value.id),
          roleId: new FormControl(value.id),
          firstName: new FormControl(value.firstName),
          lastName: new FormControl(value.lastName),
          hospital: new FormControl(value.hospital),
          registrationNumber: new FormControl(value.registrationNumber),
          address: new FormControl(value.address),
          address2: new FormControl(value.address2),
          city: new FormControl(value.city),
          state: new FormControl(value.state),
          postalCode: new FormControl(value.postalCode),
          mobileNumber: new FormControl(value.mobileNumber),
          landline: new FormControl(value.landline),
          userName: new FormControl(value.userName),
          password: new FormControl(value.password),
        });
        loading.close();
      }).catch((error) => {
        loading.close();
      })
    }
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
