import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: AngularFireAuth) { }

  signup(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email,password);
  }

  login(email:string, password: string){
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  logout(){
    return this.auth.signOut();
  }

  getUserData(){
    return this.auth.authState;
  }
}
