import { Component, OnInit } from '@angular/core';
import { FutureService } from '../services/future.service'

@Component({
  selector: 'app-future-cultivation',
  templateUrl: './future-cultivation.component.html',
  styleUrls: ['./future-cultivation.component.css']
})

export class FutureCultivationComponent implements OnInit {

  constructor(private fut: FutureService) { }

  credential={
    type:'',
    qty:'',
    year:''
  }

  ngOnInit() {

  }

  AddFuture(){
    
    this.fut.AddFutureHarvest(this.credential).subscribe(
      result=>{
        console.log(result)
      }
    )
    
  }


}
