import { Injectable } from '@angular/core';
import { Color } from '../models/color.model';
import { ALL_COLORS } from '../data/colors';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {  
  private readonly colors: Color[] = ALL_COLORS.map(clr => ({
    ...clr, 
    name: clr.name.toLowerCase()
  }));


  constructor() { }

  private delay(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis));
  }

  async search(keyword: string): Promise<Color[]> {
    console.log('starting search for ' + keyword);
    await this.delay(3000);

    if ((!keyword) || (typeof(keyword) !== 'string')) {
      console.log('search completed ' + keyword);
      return [];
    }

    keyword = keyword.toLowerCase();
    let res = this.colors.filter(clr => clr.name.includes(keyword));

    console.log('search completed ' + keyword);
    return res;    
  }
  
}
