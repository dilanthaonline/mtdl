import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MtdlService } from '../mtdl.service';
import { Assignment } from './../interface';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {

  constructor(private router: Router, private service: MtdlService) { }

  assignmentForm = new FormGroup({
    subject: new FormControl('', Validators.required),
    subtitile: new FormControl('')
  });

  assignmentList: Assignment[] = [];

  ngOnInit() {
    const loading = this.service.loading();
    this.service.getAssignments().then(items => {
      this.assignmentList = items,
        loading.close();
    }
    ).catch(e => {
      loading.close();
    });
  }

  loadModule(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  onCreateAssignment() {
    const loading = this.service.loading();
    this.service.addUpdateAssignments(
      {
        id: 0,
        subject: this.assignmentForm.value.subject || '',
        subtitle: this.assignmentForm.value.subtitile || ''
      }
    ).then(() => loading.close()).catch(() => loading.close());
  }

}
