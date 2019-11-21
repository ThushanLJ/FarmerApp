import { Component, OnInit } from '@angular/core';
import { BidService } from '../services/bid.service'

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent implements OnInit {
  marked: boolean = true;
  harvest: any;

  constructor(private bid: BidService) { }

  ngOnInit() {

    this.bid.GetHarvest().subscribe(
      result=>{
        this.harvest = result
        console.log(this.harvest)
      }
    )
  }

  ViewHarvest(){
    this.marked = true
  }

  YourBid(){
    this.marked = false
  }

}
