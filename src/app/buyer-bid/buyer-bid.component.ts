import { Component, OnInit } from '@angular/core';
import { BidService } from '../services/bid.service'

@Component({
  selector: 'app-buyer-bid',
  templateUrl: './buyer-bid.component.html',
  styleUrls: ['./buyer-bid.component.css']
})
export class BuyerBidComponent implements OnInit {
  bidU: any;

  constructor(private bid: BidService) { }

  ngOnInit() {
    this.bid.GetBid(localStorage.getItem('userID')).subscribe(
      result=>{
        console.log(result)
        this.bidU = result
      }
    )
  }

  deleteBid(id){

    this.bid.DeleteBid(id).subscribe(
      result=>{
        window.location.reload()
      }
    )
  }

}
