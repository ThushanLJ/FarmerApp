import {Component, OnInit} from '@angular/core';
import {ExpectedCultivationService} from '../services/expected-cultivation.service';


@Component({
  selector: 'app-expected-cultivation',
  templateUrl: './expected-cultivation.component.html',
  styleUrls: ['./expected-cultivation.component.css']
})
export class ExpectedCultivationComponent implements OnInit {

  constructor(private es: ExpectedCultivationService) {
  }

  Getyear;
  Setyear;
  Cultivation_result;

  ngOnInit() {
    var x = this.Getyear;
    x = new Date();
    this.Setyear = x.getFullYear();
    console.log(this.Setyear);

    this.es.getexpectedCultivation(2020).subscribe(
      result => {
        this.Cultivation_result = result;
        this.Cultivation_result.sort((a, b) => b.percentage - a.percentage);
        console.log('**************');
        console.log(result);
      });
  }

}
