import { ElementRef,QueryList,Component,ViewRef,ViewChildren } from '@angular/core';
import {ChildXyzDirective} from './child-xyz.directive';
import {ChildAbcDirective} from './child-abc.directive';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  @ViewChildren(ChildXyzDirective) xyzChildren: QueryList<ChildXyzDirective>;
  @ViewChildren(ChildAbcDirective) abcChildren: QueryList<ChildAbcDirective>;
}
