import {Component} from "@angular/core";
import {IContact, IDetail} from "../interfaces/contact.interfaces";
import {ContactService} from "../service/contact.service";


@Component({
  selector: 'app-contact',
  templateUrl:'contact.component.html',
  styleUrls: ['contact.component.css']
})

export class ContactComponent{
  contacts: IContact[] = [];
  details: IDetail[] =[];

  constructor(private ContactService: ContactService) {
  }

  ngOnInit(){
    this.ContactService.contactList().subscribe(value => {
      this.contacts = value.data.contacts;
      this.details = value.data.details;
    })
  }

  changeContact(contact: string){
    var new_div: IDetail[] = [];
    this.ContactService.contactList().subscribe(value => {
      for(let i=0; i<value.data.details.length; i++){
        if(value.data.details[i].child == contact){
          new_div.push(value.data.details[i])
        }
      }
      this.details = new_div;
    })
  }
}
