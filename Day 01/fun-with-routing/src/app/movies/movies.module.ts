import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesSearchComponent } from './components/movies-search/movies-search.component';
import { ContainerComponent } from './components/container/container.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesSearchComponent,
    ContainerComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
