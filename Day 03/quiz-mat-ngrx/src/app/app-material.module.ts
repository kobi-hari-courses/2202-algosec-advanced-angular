import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';

const exportables = [
    MatButtonModule
];

@NgModule({
    imports: exportables, 
    exports: exportables
})
export class AppMaterialModule {
}