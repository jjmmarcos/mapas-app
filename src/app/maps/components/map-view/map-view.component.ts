import { Component } from '@angular/core';1
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent {
  constructor(private placesService: PlacesService) {}

  ngOnInit(): void {
    console.log(this.placesService.useLocation);
  }
}
