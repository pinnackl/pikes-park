import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PikesUserComponent } from './pikes-user/pikes-user.component';

const routes: Routes = [
  { path: 'user', component: PikesUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PikesUserRoutingModule { }
