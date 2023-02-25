import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MtdlService } from '../mtdl.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public returnUrl = '';
  public login = false;

  constructor(private router: Router, private route: ActivatedRoute, private service: MtdlService) { }

  public ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loadModule(pageName: string, userName?: string, password?: string) {
    if (pageName === 'myDashboard' && userName && password) {
      this.login = true;
      this.service.login(userName, password).then((value) => {
        localStorage.setItem('currentUser', JSON.stringify({ userName, password }));
        this.router.navigate([this.returnUrl === '/' ? pageName : this.returnUrl]);
      }).catch(error => {
        this.login = false;
      })
    } else {
      this.router.navigate([pageName]);
    }

  }
}
