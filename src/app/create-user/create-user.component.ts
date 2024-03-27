import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  public userForm:FormGroup=new FormGroup(
    {
      name: new FormControl(),
      age: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
         //formgroup inside formgroup
      address:new FormGroup({
        city: new FormControl(),
        pin: new FormControl(),
      }),
      cards: new FormArray([]), //array of objects
      type: new FormControl(),
      bus_fee: new FormControl(),
      hostel_fee: new FormControl(),
      
    }
  )

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

   //this.userForm.get('cards') this is object  
   //return this.userForm.get('cards') as FormArray converts object into array (assumption) to do push fn on it

  add(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl(),
        expiry: new FormControl(),
        cvv: new FormControl(),
      })
    )
  }

  delete(i:number){
    this.cardsFormArray.removeAt(i);  //removeAt(i) is similar to splice method
  }

  submit(){
    console.log(this.userForm);
  }

}
