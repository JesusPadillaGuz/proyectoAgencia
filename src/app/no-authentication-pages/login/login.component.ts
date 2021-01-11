import { NavbarComponent } from '../../navbar/navbar.component';
import { Component, EventEmitter, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
  // tslint:disable: quotemark
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  public email = '';
  public password = '';
  // @Output() emailToSend = new EventEmitter<string>();

  emailNormal: string;
  
  ngOnInit() {
  }


  onLogin(){
   // console.log("credenciales", this.email, " ", this.password)
    this.userService.loginUser(this.email, this.password)
    .then ((res) => {
      console.log("exito");
     // this.emailToSend.emit(this.email)
      //this.emailService.sendEmail(this.email);

     // this.child.blnIsEnabled = false;
      this.router.navigate(['principal']);
    }).catch((err) => {
      console.log("algo ha fallado", err.message);
    });
  }


  onLogout(){
    this.userService.logoutUser();
  }

}
