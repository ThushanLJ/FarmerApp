import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth:UserService) { }

  credentials={
    email:'',
    password:''
  }

  ngOnInit() {
  }

  login(){
    console.log(this.credentials)

    this.auth.login(this.credentials).subscribe(
      result=>{
        console.log(result)
        this.router.navigateByUrl('/myland')
      }
    )
  }

}
