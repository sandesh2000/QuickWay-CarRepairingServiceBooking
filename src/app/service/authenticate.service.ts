import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService implements CanActivate{

  constructor(private loginService:LoginService,private router:Router) { }
  divertToLogin(){
    this.router.navigateByUrl('/login')
  }
  canActivate(): boolean {
      if(this.loginService.getLoginUser()==null) {
        this.divertToLogin();
        return false;
      }
      else return true;
  }
}
