import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';

const routes : Routes = [
  { path: '', component: FirstComponent},
  { path: 'page1', component: SecondComponent}
]

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {enableTracing: false})
    ],
  exports: [RouterModule]
})
export class RoutingModule { } 