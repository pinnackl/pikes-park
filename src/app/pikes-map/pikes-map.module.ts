import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './../auth/auth.service';


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
  providers: [AuthService],
  bootstrap: [
    GooglemapComponent
  ]
})
export class PikesMapModule { }
