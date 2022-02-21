import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Garage } from '../model/garage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: Garage[] = [];
  currentUser: Garage | null = null;
  constructor(private http:HttpClient) { }
  addUser(user:Garage):Observable<any>{
    console.log("Add customer service" + JSON.stringify(user))
    return this.http.post("http://localhost:3000/register/",user,{responseType:'text'});
  }
  getAllProducts():Observable<any>{
    return this.http.get("http://localhost:3000/products");
  }
  registerUser(newuser: Garage) {
    this.users.push(newuser);
    console.log("Reg Success" + JSON.stringify(newuser))
  }
  loginUser(user: Garage):Observable<any> {
    this.currentUser=user;
    return this.http.post("http://localhost:3000/login/",user,{responseType:'text'});
  }
  login(loginUser: Garage): boolean {
    console.log(loginUser)
    //console.log(this.users.indexOf(loginUser))

    let found: Garage[] = this.users.filter(
      user => { return JSON.stringify(user.emailid).toLowerCase().includes(loginUser.emailid) });
    console.log("Found user" + JSON.stringify(found))
    if (found.length == 1 && found[0].password == loginUser.password) {
      this.currentUser = loginUser;
      return true;
    }
    else {
      return false;
    }
  }
  getCust() {
    return this.users;
  }
  logout() {
    this.currentUser = null;
  }
  getLoginUser(): Garage | null {
    return this.currentUser;
  }
  countCurrentUsers(): number{
    if(this.users.length>=1) return 1;
    else return 0;
  }
}

