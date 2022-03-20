import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, merge, Observable, ObservedValueOf, of } from 'rxjs';
import { Color } from './models/color.model';
import { ColorsService } from './services/colors.service';
import { map, mapTo, mergeAll, switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isBusy$: Observable<boolean> = of(true);
  search$ = new BehaviorSubject('');

  results$!: Observable<Color[]>;

  constructor(private colorsService: ColorsService){}

  ngOnInit(): void {
    this.results$ = this.search$.pipe(
      map(keyword => this.colorsService.search(keyword)), 
      switchAll()
    );

    const true$ = this.search$.pipe(mapTo(true));
    const false$ = this.results$.pipe(mapTo(false));

    this.isBusy$ = merge(true$, false$);
    
  }

}
