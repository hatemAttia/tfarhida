import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { ToursService } from 'src/app/shared/services/tours.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  tours:any;
  constructor(private tourServ :ToursService) { }

  ngOnInit() {
    console.log(this.tourServ.getTours());
    this.tours=this.tourServ.getTours();
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
