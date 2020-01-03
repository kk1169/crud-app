import { Injectable } from '@angular/core';
import { Student } from '../../shared/student';
//import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  /*
  studentsRef:AngularFireList<any>; //REFERENCE TO STUDENT DATA LIST
  studentRef:AngularFireObject<any>; //REFERENCE TO STUDENT OBJECT

  //INJECT ANGULAR FIRE DATABASE DEPENDANCY IN CONSTRUCTOR
  constructor(
    private db:AngularFireDatabase
  ) { }

  //CREATE STUDENT
  AddStudent(student: Student){
    this.studentsRef.push({
      firstName:student.firstname,
      lastname:student.lastname,
      email:student.email,
      mobile:student.mobile
    })
  }

  //FETCH STUDENT OBJECT
  GetStudent(id: string){
    this.studentRef = this.db.object(`student-list/${id}`);
    return this.studentRef;
  }

  //FETCH STUDENT LIST
  GetStudentList(){
    this.studentsRef = this.db.list('student-list');
    return this.studentsRef;
  }

  //UPDATE STUDENT OBJECT
  UpdateStudent(student:Student){
    this.studentRef.update({
      firstName:student.firstname,
      lastName:student.lastname,
      email:student.email,
      mobile:student.mobile
    })
  }

  //DELETE STUDENT OBJECT
  DeleteStudent(id:string){
    this.studentRef = this.db.object(`students-list/${id}`);
    this.studentRef.remove();
  }*/
}
