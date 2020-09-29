import {ElementRef, Directive } from '@angular/core';

@Directive({
  selector: '[appChildXyz]'
})
export class ChildXyzDirective {

  constructor(private elementRef: ElementRef) { }

}