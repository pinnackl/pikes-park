import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
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
import { CallbackModule } from './callback/callback.module';

/**
* Import services
*/
import { AgmCoreModule } from '@agm/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HorizonService } from './horizon.service';
import { PikesUserService } from './pikes-user/pikes-user.service';
import { PikesMapService } from "./pikes-map/pikes-map.service"

/**
 * Import Authentication
 */
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule,
    BrowserAnimationsModule,
    PikesMapModule,
    RouterModule,
    PikesUserModule,
    SettingsModule,
    CallbackModule,
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
  providers: [HorizonService, PikesUserService, PikesMapService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
