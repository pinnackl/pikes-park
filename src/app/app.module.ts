import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GooglemapComponent } from './googlemap/googlemap.component';

import { AgmCoreModule } from '@agm/core';

import { HorizonService } from './horizon.service';

@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBV7ayzYxxlxvXsosIpgnQVtpLPwiP80Mw'
    })
  ],
  providers: [HorizonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
