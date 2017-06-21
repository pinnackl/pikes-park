import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})


export class GooglemapComponent implements OnInit {

  title: string = 'MAP';
  lat: number = 48.866667;
  lng: number = 2.333333;
  zoom: number = 11;

  constructor() { }

  ngOnInit() {
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: 9.9,
      lng: 2.5
    });
  }

  markers: marker[] = [
	  {
		  lat: 48.866667,
		  lng: 2.333333,
		  //label: 'A',
		  //draggable: true
	  },
	  {
		  lat: 49.373858,
		  lng: 7.215982,
		  //label: 'B',
		  //draggable: false
	  },
	  {
		  lat: 49.723858,
		  lng: 7.895982,
		  //label: 'C',
		  //draggable: true
	  }
  ]
  

}


// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	//label?: string;
	//draggable: boolean;
}