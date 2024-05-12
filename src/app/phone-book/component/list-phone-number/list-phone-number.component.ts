import { IPhoneNumberItem, PhoneNumberService } from './../../../services/phone-number.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-phone-number',
  templateUrl: './list-phone-number.component.html',
  styleUrls: ['./list-phone-number.component.css']
})
export class ListPhoneNumberComponent implements OnInit {


  phoneNumberListItems: IPhoneNumberItem[] = [];
  name: string = '';
  phoneNumber: string = '';
  empty: boolean = false;
  duplicated:boolean =false;



  constructor(
    public phoneNumberService: PhoneNumberService
  ){}
  ngOnInit(): void {
    this.phoneNumberListItems =  this.phoneNumberService.phoneNumberListItems;
  }

  deleteItem(i: number){
    this.phoneNumberListItems[i].isDeleted = true;
    this.phoneNumberService.saveData();
  }

  editItem(item: any){
    this.name=this.phoneNumberListItems[item].name;
    this.phoneNumber= this.phoneNumberListItems[item].phoneNumber;
    this.phoneNumberService.editItem(this.phoneNumberListItems[item]);
  }
  saveEditedItem(item: IPhoneNumberItem , i:number){
    this.empty=false;
    this.duplicated=false;

    if(!this.phoneNumberListItems[i].name){
      this.empty=true;
      return;
    }

    if(!this.phoneNumberListItems[i].phoneNumber){
      this.empty=true;
      return;
    }
    if(this.phoneNumberService.phoneNumberListItems.filter(x=> x.phoneNumber === this.phoneNumberListItems[i].phoneNumber && !x.isDeleted).length>1){
      this.duplicated=true;
      return;
    }
    this.phoneNumberService.editItem(item);

  }
}
