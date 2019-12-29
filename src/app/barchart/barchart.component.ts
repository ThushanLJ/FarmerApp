import {Component, OnInit} from '@angular/core';
import {ChartComponent} from '../chart/chart.component';
import {MapService} from '../services/map.service';
import {ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  Type;

  constructor(private cc: ChartComponent, private mapS: MapService) {
  }


  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {xAxes: [{}], yAxes: [{}]},
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    {data: [], label: ''},
  ];


  ngOnInit() {
    this.Type = this.cc.passtype;
    console.log(this.Type);
    this.mapS.sendType(this.Type).subscribe(
      (data) => {
        data.forEach(element => {
          (this.barChartData[0].data as number[]).push(element.totalQuantity);
          this.barChartLabels.push(element.year);
        });
      });
  }


  back() {
    this.cc.marked = true;
  }
}
