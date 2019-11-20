import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myland',
  templateUrl: './myland.component.html',
  styleUrls: ['./myland.component.css']
})
export class MylandComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next(){
    this.router.navigateByUrl('/myland/myhavest')
  }
}
