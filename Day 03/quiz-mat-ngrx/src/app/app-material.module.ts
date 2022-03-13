import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from "@angular/material/toolbar";

const exportables = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatToolbarModule
];

@NgModule({
  imports: exportables,
  exports: exportables,
})
export class AppMaterialModule {}
