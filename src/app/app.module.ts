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

/**
 * Import modules
 */
import { PikesMapModule} from './pikes-map/pikes-map.module';

 /**
 * Import servces
 */
import { HorizonService } from './horizon.service';
import { PikesUserService } from './pikes-user/pikes-user.service';

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
    PikesMapModule
  ],
  providers: [HorizonService, PikesUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
