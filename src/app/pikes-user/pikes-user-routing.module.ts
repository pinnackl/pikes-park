import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PikesUserComponent } from './pikes-user/pikes-user.component';

import { AuthGuard } from './../auth/auth.guard';

const routes: Routes = [
  {
    path: 'user',
    component: PikesUserComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PikesUserRoutingModule { }
