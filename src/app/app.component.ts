import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carservice-project';
  isLoggedIn: boolean = false;
  constructor(private router:Router,private logService:LoginService){
  }
  login() {
    this.router.navigateByUrl("/login");
    this.isLoggedIn = true;
  }
  logout() {
    console.log("Logout")
    this.logService.logout();
    this.router.navigateByUrl("/login");
  }
 
  checkLoginStatus(): boolean{
    if (this.logService.getLoginUser()==null)
      return false;
    else
      return true;
  }
  
}
