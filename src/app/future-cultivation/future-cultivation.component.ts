import { Component, OnInit } from '@angular/core';
import { FutureService } from '../services/future.service'
import { ExpectedCultivationComponent } from '../expected-cultivation/expected-cultivation.component'

@Component({
  selector: 'app-future-cultivation',
  templateUrl: './future-cultivation.component.html',
  styleUrls: ['./future-cultivation.component.css']
})

export class FutureCultivationComponent implements OnInit {
  current: any;
  future: any;
  Getyear: any;
  Setyear: any;
  year: any[];

  constructor(private fut: FutureService, private exe: ExpectedCultivationComponent) { }

  credential={
    type:'',
    quantity:'',
    year:'',
    farmerId:''
  }


  ngOnInit() {

    var x = this.Getyear;
     x = new Date();
    this.Setyear = x.getFullYear();

    this.year = [this.Setyear, this.Setyear+1, this.Setyear+2, this.Setyear+3, this.Setyear+4 ]

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
        window.location.reload()
      }
    )
    
  }


}
