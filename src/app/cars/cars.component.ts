import { Component } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  
  public cars:any = [];
  public term:string = '';
  public pageNo:number = 0;
  public column:string = '';
  public order:string = '';
  public queries:any = {
    filter:'',
    limit:10,
    pageNo:0,
    sortBy:'',
    order:''
  }

constructor( private _carsService:CarsService){
    _carsService.getCars().subscribe(
      (data:any)=>{
        this.cars = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )

}

  filteredcars(){
    this._carsService.getfilteredCars(this.term).subscribe(
      (data:any)=>{
        this.cars = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )

  }

  pagedcars(){
    this._carsService.getpagedCars(this.pageNo).subscribe(
      (data:any)=>{
        this.cars = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  sortedcars(){
    this._carsService.getsortedCars(this.column,this.order).subscribe(
      (data:any)=>{
        this.cars = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  deletedcars(id:string){
    this._carsService.getdeletedCars(id).subscribe(
      (data:any)=>{
        alert("Deleted successfully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  loaddata(){
    this._carsService.loaddata(this.queries).subscribe(
      (data:any)=>{
        this.cars = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

}


