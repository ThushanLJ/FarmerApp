import { Component, OnInit } from '@angular/core';
import { FutureService } from '../services/future.service'

@Component({
  selector: 'app-future-cultivation',
  templateUrl: './future-cultivation.component.html',
  styleUrls: ['./future-cultivation.component.css']
})

export class FutureCultivationComponent implements OnInit {
  current: any;
  future: any;

  constructor(private fut: FutureService) { }

  credential={
    type:'',
    quantity:'',
    year:'',
    farmerId:''
  }

  ngOnInit() {

    this.fut.CurrentHarvest().subscribe(
      result=>{
        console.log(result)
        this.current = result
      }
    )


    this.fut.FutureHarvest().subscribe(
      result=>{
        console.log(result)
        this.future = result
      }
    )
  }

  AddFuture(){
    

    this.credential.farmerId = localStorage.getItem('userID')

    console.log(this.credential)
    this.fut.AddFutureHarvest(this.credential).subscribe(
      result=>{
        console.log(result)
        window.alert('You have successfully added future cultivation')
        this.ngOnInit()
      }
    )
    
  }


}
