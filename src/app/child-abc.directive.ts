import { ElementRef,Directive } from '@angular/core';

@Directive({
  selector: '[appChildAbc]'
})
export class ChildAbcDirective {

  constructor(private elementRef: ElementRef) { }

}