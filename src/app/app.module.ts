import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

import { RoutingModule } from './routing/routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RoutingModule ],
  declarations: [ AppComponent, FirstComponent, SecondComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
