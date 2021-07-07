import { Component, OnInit } from '@angular/core';
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

}
