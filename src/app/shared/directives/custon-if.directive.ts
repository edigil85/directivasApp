import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[custonIf]'
})
export class CustonIfDirective {

  @Input() set  custonIf (condition: boolean){
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templeteref);
    }
    else{
      this.viewContainer.clear();
    }
  }

  constructor( 
    private templeteref: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef) { }

}
