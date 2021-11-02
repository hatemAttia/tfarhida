import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-geolocation",
  templateUrl: "./geolocation.component.html",
  styleUrls: ["./geolocation.component.css"],
})
export class GeolocationComponent implements OnInit {
  public lat;
  public lng;

  constructor() {}

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    // navigator.geolocation.getCurrentPosition(
    //   function () {
    //     alert("Location accessed");
    //   },
    //   function () {
    //     alert("User not allowed");
    //   },
    //   { timeout: 10000 }
    // );
   
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position: Position) => {
    //       if (position) {
    //         console.log(
    //           'Latitude: ' +
    //             position.coords.latitude +
    //             'Longitude: ' +
    //             position.coords.longitude
    //         );
    //         this.lat = position.coords.latitude;
    //         this.lng = position.coords.longitude;
    //         console.log(this.lat);
    //         console.log(this.lng);
    //       }
    //     },
    //     (error: PositionError) => console.log(error)
    //   );
    // } else {
    //   alert('Geolocation is not supported by this browser.');
    // }
  }
  
  
}
