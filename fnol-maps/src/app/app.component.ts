import { Component } from '@angular/core';
import {MarkerService } from './services/marker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MarkerService]
})
export class AppComponent {
  title = 'First notice of Loss!';
  zoom: number = 9;
  lat: number = 32.097926;
  lng: number =76.568575;
  markerLocationName: string;
  markerLongitude: string;
  markerLatitude: string;
  markerZipcode: string;
  markerIntensity: string;
  markers: marker[]=[];

constructor(private _markerService:MarkerService){
  console.log('entered the constructor');
  this.markers = this._markerService.getMarkers();
}

clickedMarker(marker:marker, index:number){
  console.log('clicked marker: '+marker.name+' at index '+index);  
}

addMarker(){
  console.log("adding new marker");
  var newMarker = {
    name: this.markerLocationName,
    lat: parseFloat(this.markerLatitude),
    lng:parseFloat(this.markerLongitude),
    zipcode:parseFloat(this.markerZipcode),
    intensity:parseFloat(this.markerIntensity)
  }
  this.markers.push(newMarker);
  console.log(JSON.stringify(this.markers));
  this._markerService.addMarker(newMarker);
}

removeMarker(markerToDelete){
  console.log('removing marker');
  for (var i = 0; i<this.markers.length;i++){
    if (markerToDelete.name== this.markers[i].name && 
      markerToDelete.lat== this.markers[i].lat &&
      markerToDelete.lng== this.markers[i].lng)
      {this.markers.splice(i,1);}
  }
}
 
}

interface marker{
  name: string;
  lat: number;
  lng: number;
  zipcode: number;
  intensity: number;

}