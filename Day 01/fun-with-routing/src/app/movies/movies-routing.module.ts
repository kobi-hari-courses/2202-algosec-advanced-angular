import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { DetailsComponent } from './components/details/details.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesSearchComponent } from './components/movies-search/movies-search.component';

const routes: Routes = [
  {path: '', component: ContainerComponent, children: [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: MoviesListComponent}, 
    {path: 'search', component: MoviesSearchComponent}, 
    {path: 'details/:id', component: DetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
