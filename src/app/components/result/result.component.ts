import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  bmi: number;
  result: string;
  interpretation: string;

  constructor(private route: ActivatedRoute) {
    this.bmi = +route.snapshot.paramMap.get('value')!;
    this.result = '';
    this.interpretation = '';
  }

  ngOnInit(): void {
    this.getResult();
  }

  getResult() {
    if (this.bmi >= 40) {
      this.result = 'Obese';
      this.interpretation = 'You have a much higher body weight than normal. You must lead a much healthier lifestyle.'
    } else if (this.bmi >= 25) {
      this.result = 'Over weight';
      this.interpretation = 'You have a body weight that is higher than normal. Try to exercise more.'
    } else if (this.bmi >= 18.5) {
      this.result = 'Normal weight';
      this.interpretation = 'You have a normal body weight. Nice job!'
    } else {
      this.result = 'Under weight';
      this.interpretation = 'You have a lower body weight than normal. Try to eat a little more.'
    }
  }

}
