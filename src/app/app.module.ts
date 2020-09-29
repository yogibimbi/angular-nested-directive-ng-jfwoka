import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentDirective } from './parent.directive';
import { ChildXyzDirective } from './child-xyz.directive';
import { ChildAbcDirective } from './child-abc.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ParentDirective, ChildXyzDirective, ChildAbcDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
