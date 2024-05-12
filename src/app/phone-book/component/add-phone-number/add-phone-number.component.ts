import { IPhoneNumberItem, PhoneNumberService } from './../../../services/phone-number.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-phone-number',
  templateUrl: './add-phone-number.component.html',
  styleUrls: ['./add-phone-number.component.css']
})
export class AddPhoneNumberComponent {

  name: string = '';
  phoneNumber: string = '';
  empty: boolean = false;
  duplicated:boolean =false;


  constructor(
    private phoneNumberService: PhoneNumberService
  ){}

  addItem(){
    this.empty=false;
    this.duplicated=false;


    if(!this.name){
      this.empty=true;
      return;
    }

    if(!this.phoneNumber){
      this.empty=true;
      return;
    }

    if(this.phoneNumberService.phoneNumberListItems.filter(x=> x.phoneNumber === this.phoneNumber && !x.isDeleted).length>0){
      this.duplicated=true;
      return;
    }

    this.phoneNumberService.addTodo({
      name: this.name,
      phoneNumber: this.phoneNumber,
      isDeleted: false,
      isEdited: false,
      canShow: true
    });
    this.name='';
    this.phoneNumber='';
  }
}
