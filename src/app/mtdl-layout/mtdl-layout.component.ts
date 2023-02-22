import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mtdl-layout',
  templateUrl: './mtdl-layout.component.html',
  styleUrls: ['./mtdl-layout.component.scss']
})
export class MtdlLayoutComponent implements OnInit {

  panelOpenState = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadModule(pageName: string): void {
    this.router.navigate([`${pageName}`]);

  }

}
