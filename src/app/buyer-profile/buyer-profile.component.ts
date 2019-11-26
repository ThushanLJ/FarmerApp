import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BidService} from '../services/bid.service';

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent implements OnInit {
  marked: boolean = true;
  harvest: any;

  constructor(private bid: BidService, private  router: Router) {
  }

  bid_details={
    bidUnitPrice:0,
    buyerId:'',
    harvestId:0
  }

  ngOnInit() {

    this.bid.GetHarvest(localStorage.getItem('userID')).subscribe(
      result=>{
        this.harvest = result
        console.log(this.harvest)
      }
    );
  }

  ViewHarvest() {
    this.marked = true;
  }

  YourBid() {
    this.marked = false;
  }

  LogOut(){

    localStorage.removeItem('userID')

    this.router.navigateByUrl('/home')
  }

  SubmitBid(harvID){

    this.bid_details.harvestId = harvID
    this.bid_details.buyerId = localStorage.getItem('userID')

    console.log(this.bid_details)

    this.bid.AddBid(this.bid_details).subscribe(
      result=>{
        this.ngOnInit()
        window.alert('Bid is added successfully')
      }
    )
  }

}
