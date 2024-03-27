import { Component } from '@angular/core';
import { MailService } from '../mail.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent {

  public mails:any = [];
  constructor( private _carsService:MailService){
    _carsService.getMails().subscribe(
      (data:any)=>{
        this.mails = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
}
