import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from '../interface';
import { MtdlService } from '../mtdl.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent {

  public get authUser(): AuthUser {
    return this.service.authUser;
  }

  constructor(private router: Router, private service: MtdlService) { }

  loadModule(pageName: string) {
    if (pageName === 'login') {
      localStorage.removeItem('currentUser');
    }
    this.router.navigate([pageName]);
  }
}
