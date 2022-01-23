import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Garage } from '../model/garage';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Garage = new Garage();
  isLoginFailed: boolean = false;
  constructor(private logService: LoginService, private router: Router) { }

  ngOnInit(): void {
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
