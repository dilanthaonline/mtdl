import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public returnUrl = '';

  constructor(private router: Router, private route: ActivatedRoute,) { }

  public ngOnInit() {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loadModule(pageName: string, name?: string, pasword?: string) {
    if (pageName === 'MyDashboard') {
      if (name === 'Joeroge' && pasword === '123') {
        localStorage.setItem('currentUser', JSON.stringify({ name, pasword }));
        this.router.navigate([this.returnUrl]);
      }
      return;
    }
    this.router.navigate([pageName]);
  }
}
