import { Component, inject, Inject, Injector, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { from } from 'rxjs';
import { NAME_TOKEN } from './undeclarated/undeclarated.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: NAME_TOKEN,
      useValue: 'AppComponent'
    }
  ]
})
export class AppComponent {
  title = 'insert-stand';

  readonly injector = inject(Injector);

  @ViewChild('viewContainer', {static: true, read: ViewContainerRef})
  private container!: ViewContainerRef;

  readonly component$ = from(
    import('./undeclarated/undeclarated.component').then(m => m.UndeclaratedComponent),
  )

  onClickComponent() {
    // this.container.createComponent(DeclaratedComponent);
    // this.container.createComponent(UndeclaratedComponent);

    this.component$.subscribe(UndeclaratedComponent => {
      // const componentInjector = Injector.create({
      //   parent: this.injector,
      //   providers: [
      //     {
      //       provide: NAME_TOKEN,
      //       useValue: 'Egor'
      //     }
      //   ]
      // })
      // const componentRef = this.container.createComponent(UndeclaratedComponent, {injector: componentInjector});

      const componentRef = this.container.createComponent(UndeclaratedComponent, {injector: this.injector});

      // componentRef.setInput()
    })
  }

  onClickTemplate(template: TemplateRef<{currentIndex: number; $implicit: string}>) {
    const view = this.container.createEmbeddedView(template, {currentIndex: Date.now(), $implicit: 'Egor'});
  }

  onClickClear() {
    this.container.clear();
  }

}
