import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnStyle: string = "btn btn-primary";
  students: any[] = [];
  studentCollection: any[] = [
    { name: "Toyna", favNumber: 743747, favColor: "orange"},
    { name: "Kali", favNumber: 3847387483, favColor: "blue"},
    { name: "Hung", favNumber: 100, favColor: "black"},
    { name: "Christian", favNumber: 111, favColor: "green"},
    { name: "Mark", favNumber: 222, favColor: "pink"},
    { name: "Jake", favNumber: 333, favColor: "purple"},
    { name: "Jonathan", favNumber: 444, favColor: "red"},
    { name: "Manami", favNumber: 555, favColor: "yellow"},
    { name: "Tracy", favNumber: 666, favColor: "gray"},
    { name: "Marc", favNumber: 777, favColor: "yellow orange"},
    { name: "Elena", favNumber: 888, favColor: "brown"}
  ];

  title = 'student-list';

  getStudents(): void {
    this.students = this.studentCollection;
  }
  changeColor(): void {
    this.btnStyle = "btn btn-danger";
  }

  constructor(
    private usersvc: UserService
  ) {
    this.usersvc.list();
  }

  ngOnInit(): void {

  }
}
