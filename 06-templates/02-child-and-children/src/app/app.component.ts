import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ZooComponent } from './zoo/zoo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'contentchildren-by-service';

  constructor() {
    console.log('constructor', this.zooComponentInstace);
  }

  ngOnInit() {
    console.log('ngOnInit', this.zooComponentInstace);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.zooComponentInstace);
  }

  // @ViewChild('zooInstace')
  // @ViewChild(ZooComponent)
  // @ViewChild(ZooComponent, {read: ZooComponent})
  // @ViewChild(ZooComponent, {read: ZooComponent, static: false})
  @ViewChild(ZooComponent, {read: ZooComponent, static: true})
  private zooComponentInstace: ZooComponent | undefined;

  // @ViewChild('zooInstace', {read: ElementRef})
  @ViewChild(ZooComponent, {read: ElementRef})
  private zooComponentElement: ElementRef | undefined;

  @ViewChild(ZooComponent, {read: ViewContainerRef})
  private zooComponentViewContainerRef: ViewContainerRef | undefined;
}
