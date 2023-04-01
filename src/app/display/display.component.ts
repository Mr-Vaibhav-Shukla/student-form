import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  constructor(public studentService: StudentService) {}
  student = this.studentService.students;
  onDelete(id: Date) {
    this.studentService.deleteStudent(id);
  }

  onEdit(id: Date) {
    this.studentService.studentEdit.emit(id);
  }
}
