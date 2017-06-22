import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Import components
 */
import { AppComponent } from './app.component';
import { GooglemapComponent } from './pikes-map/googlemap/googlemap.component'; // Import for first route rendering
/**
 * Import modules
 */
import { PikesMapModule } from './pikes-map/pikes-map.module';
import { PikesUserModule } from './pikes-user/pikes-user.module';
import { SettingsModule } from './settings/settings.module';

/**
* Import servces
*/
import { AgmCoreModule } from '@agm/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HorizonService } from './horizon.service';
import { PikesUserService } from './pikes-user/pikes-user.service';
import { PikesMapService } from "./pikes-map/pikes-map.service"

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    PikesMapModule,
    RouterModule,
    PikesUserModule,
    SettingsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBV7ayzYxxlxvXsosIpgnQVtpLPwiP80Mw'
    }),
    RouterModule.forRoot([
      {
        path: '',
        component: GooglemapComponent
      }
    ])
  ],
  providers: [HorizonService, PikesUserService, PikesMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
