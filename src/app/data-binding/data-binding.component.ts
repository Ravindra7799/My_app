import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  // public age:number = 20;
  public name:string = "Akhil";
  public isIndian:boolean = true;
  public ages:number[] = [10, 20, 30, 40];
  public states:string[] = ['AP', 'TS', 'TN'];
  public cities:string[] = ['Hyd', 'Warangal', 'Khammam'];
  
  public products: any = [
    {name:'pen', price: 20},
    {name:'phone', price: 20000},
    {name:'laptop', price: 50000},
  ]

  public phone:string = "+91 "

  submit(){
    alert("submitted");
  }
  store(){
    alert("stored");
  }





}
