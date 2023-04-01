import { EventEmitter, Injectable } from '@angular/core';
import { Student } from 'src/app/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [];
  studentEdit = new EventEmitter<Date>()

  addStudent(newStudent: Student){
    this.students.push(newStudent)
    console.log(this.students);
  }

  deleteStudent(id: Date){
    const idx = this.students.findIndex(s => s.id === id)
    this.students.splice(idx,1);
  }
}
