import { Component, OnInit } from '@angular/core';
import { ExpectedCultivationService } from '../services/expected-cultivation.service'

@Component({
  selector: 'app-add-expected',
  templateUrl: './add-expected.component.html',
  styleUrls: ['./add-expected.component.css']
})
export class AddExpectedComponent implements OnInit {

  constructor(private exe: ExpectedCultivationService) { }

  credential={
    expectedQuantity:'',
    expectedYear:'',
    type:''
  }

  ngOnInit() {
  }

  AddExpected(){
    console.log(this.credential)
    this.exe.addexpectedCultivation(this.credential).subscribe(
      result=>{
        window.alert('Expected harvest is added successfully!')
      }
    )
  }


}
