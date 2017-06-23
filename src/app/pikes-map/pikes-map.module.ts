import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Import components
 */
import { GooglemapComponent } from './googlemap/googlemap.component';

/**
 * Import modules
 */
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot()
  ],
  declarations: [
  	GooglemapComponent
  ],
  exports: [
  	GooglemapComponent
  ],
  bootstrap: [
  	GooglemapComponent
  ]
})
export class PikesMapModule { }
