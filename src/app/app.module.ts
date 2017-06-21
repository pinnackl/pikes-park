import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HorizonService } from './horizon.service';
import { PikesUserService } from './pikes-user/pikes-user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HorizonService, PikesUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
