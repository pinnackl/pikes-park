import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PikesUserRoutingModule } from './pikes-user-routing.module';
import { PikesUserComponent } from './pikes-user/pikes-user.component';

@NgModule({
  imports: [
    CommonModule,
    PikesUserRoutingModule
  ],
  declarations: [PikesUserComponent]
})
export class PikesUserModule { }

