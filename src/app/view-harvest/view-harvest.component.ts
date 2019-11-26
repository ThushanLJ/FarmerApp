import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service'
import { ViewLandComponent } from '../view-land/view-land.component'
import { BidService } from '../services/bid.service'

@Component({
  selector: 'app-view-harvest',
  templateUrl: './view-harvest.component.html',
  styleUrls: ['./view-harvest.component.css']
})
export class ViewHarvestComponent implements OnInit {
  harvest: any;
  harvestId

  arr = [1,2,3,4,5,6]
  harvBid: any;

  constructor(private map: MapService, private view: ViewLandComponent, private bid: BidService) { }

  ngOnInit() {

    this.map.ViewHarvest(this.view.landId).subscribe(
      result=>{
        this.harvest = result
        console.log(this.harvest)
      }
    )
  }

  UpdateHarvest(harvest){

    harvest.status = 1
    this.map.UpdateHarvest(harvest).subscribe(
      result=>{
        this.ngOnInit()
      }
    )
  }


  ResetUpdate(harvest){

    harvest.status = 0
    this.map.UpdateHarvest(harvest).subscribe(
      result=>{
        this.ngOnInit()
      }
    )
  }


  ViewBid(id){
    this.bid.GetHarvestBid(id).subscribe(
      result=>{
        console.log(result)
        this.harvBid = result
      }
    )
  }


  AcceptBid(bid){

    bid.status = 1
    this.bid.UpdateBid(bid).subscribe(
      result=>{
        window.alert('Bid is accepted successfully!')
        window.location.reload()
      }
    )
  }


  Back(){
    this.view.marked = true
  }

}
