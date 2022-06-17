import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IDataJSON} from "../interfaces/contact.interfaces";

@Injectable({
  providedIn: 'root'
})

export class ContactService{
  constructor(private httpClient: HttpClient) {
  }

  contactList(){
    return this.httpClient.get<IDataJSON>('http://localhost:4200/assets/data.json')
  }
}
