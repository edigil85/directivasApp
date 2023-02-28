import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustonIfDirective } from './directives/custon-if.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    CustonIfDirective
  ],
  exports:[
    ErrorMsgDirective,
    CustonIfDirective
  ]
})
export class SharedModule { }
