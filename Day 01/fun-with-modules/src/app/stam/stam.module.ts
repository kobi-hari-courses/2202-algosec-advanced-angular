import { NgModule } from "@angular/core";
import { ChildModule } from "../child/child.module";
import { XyComponent } from './components/xy/xy.component';

@NgModule({
  imports: [
    ChildModule
  ],
  declarations: [
    XyComponent
  ], 
  exports: [
    XyComponent, 
    ChildModule
  ],  
})
export class StamModule {

}