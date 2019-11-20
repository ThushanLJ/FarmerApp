import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service'

@Component({
  selector: 'app-view-land',
  templateUrl: './view-land.component.html',
  styleUrls: ['./view-land.component.css']
})
export class ViewLandComponent implements OnInit {

  constructor(private map:MapService) { }

    farmerId


  ngOnInit() {

    this.farmerId = localStorage.getItem('userID')

    this.map.ViewLand(this.farmerId).subscribe(
      result=>{
        console.log(result)
      }
    )
  }

}
