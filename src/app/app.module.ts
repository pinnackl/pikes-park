import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GooglemapComponent } from './googlemap/googlemap.component';

import { AgmCoreModule } from '@agm/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// SERVICES
import { HorizonService } from './horizon.service';
import { PikesUserService } from './pikes-user/pikes-user.service';

// MODULES
import { PikesUserModule } from './pikes-user/pikes-user.module';

import { PikesUserComponent } from './pikes-user/pikes-user/pikes-user.component';

@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    PikesUserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBV7ayzYxxlxvXsosIpgnQVtpLPwiP80Mw'
    }),
    RouterModule.forRoot([
      {
        path: '',
        component: PikesUserComponent
      }
    ])
  ],
  providers: [HorizonService, PikesUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
