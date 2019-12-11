import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  farmer: any;
  marked: boolean = true;

  constructor(private auth:UserService, private router: Router) { }

  ngOnInit() {

    this.auth.AllFarmer().subscribe(
      result=>{
        console.log(result)

        this.farmer = result
      }
    )
  }

  Accept(farmerId){

    this.auth.updateFarmer(farmerId).subscribe(
      result=>{
        window.location.reload()
      }
    )
  }

  home(){
    this.marked = true
  }

  add(){
    this.marked = false
  }


  LogOut(){

    this.router.navigateByUrl('/home')
  }


}
