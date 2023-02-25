import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-lessons',
  templateUrl: './my-lessons.component.html',
  styleUrls: ['./my-lessons.component.scss']
})
export class MyLessonsComponent {
  constructor(private router: Router) { }

  loadModule(pageName: string): void {
    this.router.navigate([pageName]);

  }
}
