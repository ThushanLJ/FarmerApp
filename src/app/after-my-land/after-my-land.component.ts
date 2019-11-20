import { Component, OnInit } from '@angular/core';
import { ViewLandComponent } from '../view-land/view-land.component'

@Component({
  selector: 'app-after-my-land',
  templateUrl: './after-my-land.component.html',
  styleUrls: ['./after-my-land.component.css']
})
export class AfterMyLandComponent implements OnInit {

  constructor(private view : ViewLandComponent) { }

  credentials={
    type:'',
    quantity:'',
    unitPrice:'',
    farmerId:'',
    landId:0
  }

  ngOnInit() {
  }

  AddHarvest(){

    this.credentials.farmerId = localStorage.getItem('userID')
    this.credentials.landId = this.view.landId

    console.log(this.credentials)
  }

}
