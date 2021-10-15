import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {
   }

    sendMail(data ){
      console.log("mail sended")
  }
}
