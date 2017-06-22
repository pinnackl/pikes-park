import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
