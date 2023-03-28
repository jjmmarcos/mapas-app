import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if(!navigator.geolocation) {
  alert('Su navegador no soporta el Geolocation');
  throw new Error('Su navegador no soporta el Geolocation');
}

if(environment) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
