import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1Ijoiam90YWRlYWNrIiwiYSI6ImNsY3hjMjhhNzAwYnYzb3BkdHJ3YWlwdXcifQ.KB-6TOlKFpCUQBECQDAUFA';

if(!navigator.geolocation) {
  alert('Su navegador no soporta el Geolocation');
  throw new Error('Su navegador no soporta el Geolocation');
}

if(environment) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
