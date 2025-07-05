import { Component, inject, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'zone';
  counter = 0;

  private readonly ngZone = inject(NgZone);

  onClick() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.counter += 1;

        console.log('Increment setInterval');
      }, 1000)
    });

    // d3.listener('context', () => {this.ngZone.run(() => {this.counter += 1})})

    this.counter += 1;

    console.log('Increment');
  }
}
