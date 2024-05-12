import { PhoneNumberService } from './../../../services/phone-number.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-phone-number',
  templateUrl: './search-phone-number.component.html',
  styleUrls: ['./search-phone-number.component.css']
})
export class SearchPhoneNumberComponent {
  searchText: string ='';
  constructor(
    private phoneNumberService: PhoneNumberService
  ){}
  searchItem(){
    if(this.searchText){
      this.phoneNumberService.phoneNumberListItems.forEach(element => {
        element.canShow=false
        if(element.name.toUpperCase().includes(this.searchText.toUpperCase().trim())){
          element.canShow=true
        }
        if(element.phoneNumber.toUpperCase().includes(this.searchText.toUpperCase().trim())){
          element.canShow=true
        }
      });
    }
    else{
      this.phoneNumberService.phoneNumberListItems.forEach(element => {
        element.canShow=true
      });
    }
  }
}
