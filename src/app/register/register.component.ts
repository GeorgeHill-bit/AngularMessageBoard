import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUserEmail = '';
  newUserFName = '';
  newUserLName = '';
  newUserPassword = '';
  newUserPasswordConfirm = '';

  constructor() { }

  ngOnInit() {
  }

  registerUser() {
    ​
    if (
      this.newUserEmail.trim() === '' ||
      this.newUserFName.trim() === '' ||
      this.newUserLName.trim() === '' ||
      this.newUserPassword.trim() === '' ||
      this.newUserPasswordConfirm.trim() === '' ||
      this.newUserPassword.trim() !== this.newUserPasswordConfirm.trim()
    ) {
      return;
    }
    console.log('newUser Email is:', this.newUserEmail);
    console.log('newUser FName is:', this.newUserFName);
    console.log('newUser LName is:', this.newUserLName);
    console.log('newUser Password is:', this.newUserPassword);
    console.log('newUser Password Confirmation is:', this.newUserPasswordConfirm);
  }

}
