import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DropDownDirective } from './shared/directive/drop-down.directive';
import { DropnavDirective } from './shared/directive/dropnav.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropDownDirective,
    DropnavDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
