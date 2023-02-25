import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public isRegister = false;

  constructor(private router: Router) { }
  ngOnInit() {
    this.isRegister = this.router.url === '/register';
  }
  submit() {

  }
  cancel(){
    this.router.navigate(['login'])
  }
}
