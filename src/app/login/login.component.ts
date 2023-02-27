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

  constructor(private router: Router, private route: ActivatedRoute, private service: MtdlService) { }

  public ngOnInit() {
    localStorage.removeItem('currentUser');
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loadModule(pageName: string, userName?: string, password?: string) {
    if (pageName === 'myDashboard' && userName && password) {
      const loading = this.service.loading();
      this.service.login(userName, password).then((value) => {
        loading.close();
        this.router.navigate([this.returnUrl === '/' ? pageName : this.returnUrl]);
      }).catch(error => {
        loading.close()
      })
    } else {
      this.router.navigate([pageName]);
    }

  }
}
