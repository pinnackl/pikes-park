import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallbackRoutingModule } from './callback-routing.module';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
    imports: [
        CommonModule,
        CallbackRoutingModule
    ],
    declarations: [CallbackComponent]
})
export class CallbackModule { }