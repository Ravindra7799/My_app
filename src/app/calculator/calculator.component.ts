import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
public num1:number = 0;
public num2:number = 0;
public result:number = 0;
public res:number = 0;


sum(){
  this.result = Number(this.num1) + Number(this.num2);
}

mul(){
  this.res = this.num1 * this.num2;
}

}
