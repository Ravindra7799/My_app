import { Component } from '@angular/core';
import { DynamicService } from '../dynamic.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent {

  public dynamics:any = [];
  constructor( private _dynamicService:DynamicService){
    _dynamicService.getDynamic().subscribe(
      (data:any)=>{
        this.dynamics = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  refresh(){
    this._dynamicService.getDynamic().subscribe(
      (data:any)=>{
        this.dynamics = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )

  }
}
