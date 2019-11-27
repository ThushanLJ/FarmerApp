import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  details;

  type;
  passtype;
 
  marked;

  types;
  inf;
  constructor(private mapS: MapService) { }

  ngOnInit() {
    this.marked = true;
    this.mapS.viewTypes().subscribe(
      (data) => {
        this.types = data;
        this.inf = data
        console.log(this.types);
      });
  }

  submit() {
    this.marked = false;
    this.passtype = this.type;
    console.log("selected type " + this.passtype);
  //   this.mapS.sendType(this.type).subscribe(
  //     (res) => {
  //       this.details = res;
  //       console.log(this.details);
  //     });
  // }
}

}
