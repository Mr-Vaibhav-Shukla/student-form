import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  id: Date;
  editMode = false;
  studentForm: FormGroup;

  constructor(private studentservice: StudentService) {
    this.studentservice.studentEdit.subscribe((id) => {
      const student = this.studentservice.students.find((s) => s.id === id);
      (this.editMode = true), (this.id = id);
      this.initForm(
        student.name,
        student.age,
        student.standard,
        student.subject
      );
    });
  }

  ngOnInit(): void {
    this.initForm(null, null, null, null);
  }

  private initForm(name: any, age: any, standard: any, subject: any) {
    this.studentForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      age: new FormControl(age, Validators.required),
      standard: new FormControl(standard, Validators.required),
      subject: new FormControl(subject, Validators.required),
    });
  }

  onSubmit() {
    if (this.editMode) {
      const idx = this.studentservice.students.findIndex((s) => s.id === this.id);
      this.studentservice.students[idx] = {id: this.id,...this.studentForm.value};
      this.editMode = false
    } else {
      this.studentservice.addStudent({
        id: new Date(),
        ...this.studentForm.value,
      });
    }
    this.studentForm.reset();
  }
}
