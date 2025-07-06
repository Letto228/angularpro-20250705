import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HelloComponent {
  count = signal(0);

  @Input() name: string = '';

  @Output() readonly submitClick = new EventEmitter<string>();

  constructor() {
    setInterval(() => {
      this.count.update(count => count + 1);
    }, 1000);
  }
}
