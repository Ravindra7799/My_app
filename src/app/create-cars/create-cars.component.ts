import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarsService } from '../cars.service';


@Component({
  selector: 'app-create-cars',
  templateUrl: './create-cars.component.html',
  styleUrls: ['./create-cars.component.scss']
})
export class CreateCarsComponent {

  constructor( private _carsService:CarsService){}

  public carForm:FormGroup=new FormGroup(
    {
      vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      color: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      image: new FormControl(),
    }
  )

  submit(){
    console.log(this.carForm.value);
    this._carsService.createCars(this.carForm.value).subscribe(
      (data:any)=>{
        alert("Created Successfully");
        this.carForm.reset();
      },
      (err:any)=>{
        alert("Creation failed");
      }
    )
  }

}
