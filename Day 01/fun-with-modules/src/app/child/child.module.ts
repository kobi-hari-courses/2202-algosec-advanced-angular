import { NgModule } from "@angular/core";
import { AbcComponent } from './components/abc/abc.component';

@NgModule({
  declarations: [
    AbcComponent
  ], 
  exports: [
    AbcComponent
  ]

})
export class ChildModule {

}