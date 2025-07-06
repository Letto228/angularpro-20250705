import { Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { CatComponent } from '../animals/cat/cat.component';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
})
export class ZooComponent {
  @ContentChild(CatComponent, {static: true})
  private catComponent: CatComponent | undefined;
}
