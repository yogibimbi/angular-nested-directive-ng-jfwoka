import { Directive,ContentChildren,QueryList, ViewContainerRef } from "@angular/core";
import {ChildXyzDirective} from './child-xyz.directive';
import {ChildAbcDirective} from './child-abc.directive';
@Directive({
  selector: "[appParent]"
})
export class ParentDirective {
  constructor(private vcr: ViewContainerRef) {}

  ngAfterViewInit() {

  }



  @ContentChildren(ChildXyzDirective,{descendants: true}) 
 xyzChildren : QueryList<ChildXyzDirective>;

 @ContentChildren(ChildAbcDirective,{descendants: true}) 
 abcChildren : QueryList<ChildAbcDirective>;

  ngAfterContentInit() {  

      this.abcChildren.forEach(e => {
        e.elementRef.nativeElement.style.background = "red";
      });

      this.xyzChildren.forEach(e => {
        console.log(e)
        e.elementRef.nativeElement.style.background = "green";
      });

  }
}
