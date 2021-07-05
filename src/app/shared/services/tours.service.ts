import { Injectable } from '@angular/core';
import { Tours } from '../models/tour';

@Injectable({
  providedIn: 'root'
})
export class ToursService {
  tours :Array<Tours>
  constructor() { 
    this.tours=[{
      id:1,
      title:"Mauritius",
      amount:"$1450",
      image:"assets/images/intro_1.jpg",
      description:"helooooooooooooooooo",
      rate:5,
      datestart:Date.now(),
      dateend:Date.now(),
    },{
      id:1,
      title:"Greece",
      amount:"$1950",
      image:"assets/images/intro_2.jpg",
      description:"helooooooooooooooooo",
      rate:4,
      
      datestart:Date.now(),
      dateend:Date.now(),
    },
    {
      id:1,
      title:"Scotland",
      amount:"$1250",
      rate:2,
      image:"assets/images/intro_3.jpg",
      description:"helooooooooooooooooo",
      datestart:Date.now(),
      dateend:Date.now(),
    },{
      id:1,
      title:"Mauritius",
      amount:"$1450",
      image:"assets/images/intro_1.jpg",
      rate:1,
      description:"helooooooooooooooooo",
      datestart:Date.now(),
      dateend:Date.now(),
    },{
      id:1,
      title:"Mauritius",
      amount:"$1450",
      image:"assets/images/intro_3.jpg",
      rate:4,
      
      description:"helooooooooooooooooo",
      datestart:Date.now(),
      dateend:Date.now(),
    }];
  }

  getTours(){
   return this.tours;
  }
  
}
