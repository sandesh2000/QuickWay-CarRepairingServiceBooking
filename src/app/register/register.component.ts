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
  msg:any=undefined;
  errMsg:any=undefined;
  constructor(private registerService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  addUser(){
    console.log("Add emp called");
    console.log(JSON.stringify(this.user))
    this.registerService.addUser(this.user).subscribe(
      (data)=>{
        this.msg=data;
        this.errMsg=undefined;
      },
      (error)=>{
        this.msg=undefined;
        this.errMsg=error.error;
      }
    )
  }
  saveUser(){
    this.registerService.registerUser(this.user);
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
