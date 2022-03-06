import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createPromise(): Promise<number> {
    return new Promise<number>(resolve => 
      setTimeout(
        () => resolve(42), 3000));
  }

  createRandomPromise(delay: number): Promise<number> {
    const res = Math.floor(Math.random()) * 10 + 10; // 9...19

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(res), delay);
    });
  }

  createDelayedPromise<T>(delay: number, result: T): Promise<T> {
    return new Promise(res => setTimeout(() => res(result), delay));    
  }

  async go() {
    const promises = [
      this.createDelayedPromise(2000, 42), 
      this.createDelayedPromise(4000, 'Hello'), 
      this.createDelayedPromise(6000, true)
    ];

    const promiseAny = Promise.race(promises);

    const resAny = await promiseAny;
  }

  // async go() {
  //   console.log('A');
  //   await this.start();
  //   console.log('B');
  // }

  // async start() {
  //   console.log('1');
  //   const p = this.createPromise();
  //   console.log('2');
  //   await p;  // } end of start()
  //   console.log('3');

  //   await p;

  //   return true;
  // }
}
