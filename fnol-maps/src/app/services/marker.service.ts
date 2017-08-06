import {Injectable} from '@angular/core';
import {Init} from '../init.marker';

@Injectable()
export class MarkerService extends Init{
    constructor(){
        super();
        console.log('marker service initialized');
        this.load();

    }
    getMarkers(){
        console.log('calling get markers');
        var markers = JSON.parse(localStorage.getItem('markers'));
        return markers;
    }

    addMarker(newMarker){
        //get existing markers
        console.log('calling localStorage.getItem(markers) to read');
        var markers = JSON.parse(localStorage.getItem('markers'));
        //push new
        markers.push(newMarker);
        localStorage.setItem('markers', JSON.stringify(markers));

    }
}