import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://localhost:5001/';

  constructor(private afsAuth: AngularFireAuth, private httpClient: HttpClient) { }

  registerUser(email: string, pass: string){
    return new Promise((resolve,reject)=> {
      // tslint:disable-next-line: no-unused-expression
      //this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
      this.afsAuth.createUserWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
      err=> reject(err));
    });
  }
  loginUser(email: string, pass: string){
    return new Promise((resolve,reject)=> {
      // tslint:disable-next-line: no-unused-expression
      //   this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
      this.afsAuth.signInWithEmailAndPassword(email,pass)
      .then( userData => resolve(userData),
      err=> reject(err));
    });
  }

  isAuth(){
   // return this.afsAuth.authState.pipe( map(auth => auth));
  }

  logoutUser(){
    //return this.afsAuth.auth.signOut();
    return this.afsAuth.signOut();
  }


  getUsers(){

      return this.httpClient.get('https://localhost:5001/api/Usuario');
      
  }


}