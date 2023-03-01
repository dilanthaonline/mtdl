import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MtdlService } from 'src/app/mtdl.service';
import { Assignment } from './../../interface';

@Component({
  selector: 'app-assignments-item',
  templateUrl: './assignments-item.component.html',
  styleUrls: ['./assignments-item.component.scss']
})
export class AssignmentsItemComponent implements OnInit {

  @Input() assignment: Assignment

  constructor(private service: MtdlService) { }

  assignmentForm = new FormGroup({
    subject: new FormControl('', Validators.required),
    subtitile: new FormControl('')
  });

  ngOnInit() {
    this.assignmentForm.setValue(
      {
        subject: this.assignment.subject,
        subtitile: this.assignment.subtitle
      }
    )
  }

  onUpdateAssignment() {
    const loading = this.service.loading();
    this.service.addUpdateAssignments(
      {
        id: this.assignment.id,
        subject: this.assignmentForm.value.subject || '',
        subtitle: this.assignmentForm.value.subtitile || ''
      }
    ).then(() => loading.close()).catch(() => loading.close());
  }

  onDelete() {
    const loading = this.service.loading();
    this.service.deleteAssignment(this.assignment.id).then(() => loading.close()).catch(() => loading.close());
  }

}
