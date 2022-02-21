import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Garage } from './model/garage';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carservice-project';
  isLoggedIn: boolean = false;
  isLoggedOut:boolean=false;
  constructor(private router:Router,private logService:LoginService){
    router.navigateByUrl('/home')
  }
  login() {
    this.router.navigateByUrl("/login");
    this.isLoggedIn = true;
  }
  logout() {
    console.log("Logout")
    this.logService.logout();
    this.isLoggedOut=true;
    this.router.navigateByUrl("/login");
  }
 
  checkLoginStatus(): boolean{
    if (this.logService.getLoginUser()==null)
      return false;
    else
      return true;
  }
  disableLoginRegister():boolean{
    if((this.logService.countCurrentUsers()==0) || (this.isLoggedOut==true)) return true;
    else return false; 
  }
  disableLogin(): boolean{
    if (this.logService.getLoginUser()==null)
      return true;
    else
      return false;
  }
  
}
