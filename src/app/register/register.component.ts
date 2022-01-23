import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Garage } from '../model/garage';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: Garage= new Garage();
  constructor(private registerService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  saveUser(){
    this.registerService.registeUser(this.user);
    if(this.user.emailid=="" || this.user.password=="")
    {
      alert("Kindly fill all details !")
    }
    else{
      this.router.navigateByUrl('/login');
    }
    this.user=new Garage()
    console.log(this.registerService.getCust())
  }
}
