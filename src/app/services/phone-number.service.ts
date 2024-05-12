import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {

  phoneNumberListItems: IPhoneNumberItem[] = [];
  errorMessage: boolean = false;


  constructor() {
    if(localStorage.getItem('phoneNumberList')){
      this.phoneNumberListItems = JSON.parse(localStorage.getItem('phoneNumberList')!);
    }
  }

   saveData(){
    localStorage.setItem('phoneNumberList', JSON.stringify(this.phoneNumberListItems));
  }
  addTodo(item: any) {
    this.phoneNumberListItems.push(item);
    this.saveData();
  }
  deletedItem(item: IPhoneNumberItem){
    item.isDeleted = true;
    this.phoneNumberListItems=this.phoneNumberListItems.filter(x => !x.isDeleted)
    this.saveData();
  }
  editItem(item: IPhoneNumberItem){
    item.isEdited = !item.isEdited;
    this.saveData();
  }
}

export interface IPhoneNumberItem {
  name: string,
  phoneNumber: string,
  isEdited: boolean,
  isDeleted: boolean,
  canShow: boolean
}
