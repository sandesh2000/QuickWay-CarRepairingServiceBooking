import { Injectable } from '@angular/core';
import { Garage } from '../model/garage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: Garage[] = [];
  currentUser: Garage | null = null;
  constructor() { }

  registeUser(newuser: Garage) {
    this.users.push(newuser);
    console.log("Reg Success" + JSON.stringify(newuser))
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
    else 
      {
        return false;
      }
  }
  getCust(){
    return this.users;
  }
  logout() {
    this.currentUser = null;
  }
  getLoginUser(): Garage | null {
    return this.currentUser;
  }
  
}   

