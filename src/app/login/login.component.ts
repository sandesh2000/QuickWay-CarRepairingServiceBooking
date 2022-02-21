import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Garage } from '../model/garage';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 // template: `
  //<app-products [childMessage]=parentMessage></app-products>
  //`
})
export class LoginComponent implements OnInit {
  user: Garage = new Garage();
  output:Garage=new Garage();
  errMsg:any=undefined;
  isLoginFailed: boolean = false;

  constructor(private logService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    console.log("Check user login detail");
   // console.log(JSON.stringify(this.user));
    this.logService.loginUser(this.user).subscribe(
      (data)=>{
        this.output=data;
        this.user=data;
      console.log(this.output)
        this.router.navigateByUrl('/products')
      },
      (error)=>{
        this.errMsg=error.error
        //alert("Wrong")
      }
    )
  }
  getloginUser(){
    return this.user;
  }
  login() {
    if (this.logService.login(this.user)) {
      this.isLoginFailed = false;
      this.router.navigateByUrl('/products')
      console.log("Login Success")
    }
    else {
      console.log("Login Failed")
      this.isLoginFailed = true;

    }
  }
}
