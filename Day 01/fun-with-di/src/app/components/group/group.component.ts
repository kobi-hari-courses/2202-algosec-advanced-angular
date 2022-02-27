import { Component, OnInit } from '@angular/core';
import { PREFIX_TOKEN } from 'src/app/constants/injection-tokens';
import { AdditionService } from 'src/app/services/addition.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'], 
  providers: [
    // AdditionService
    {
      provide: PREFIX_TOKEN, 
      useValue: '@@@@@@'
    },
    {
      provide: AdditionService, 
      useClass: AdditionService
  }]
})
export class GroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
