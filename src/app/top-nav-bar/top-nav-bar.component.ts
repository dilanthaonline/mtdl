import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent {
  constructor(private router: Router) { }

  loadModule(pageName: string) {
    if (pageName === 'login') {
      localStorage.removeItem('currentUser');
    }
    this.router.navigate([pageName]);
  }
}
