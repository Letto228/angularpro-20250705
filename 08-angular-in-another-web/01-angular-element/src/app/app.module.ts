import { inject, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello/hello.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    HelloComponent
  ],
})
export class AppModule {
  private readonly injector = inject(Injector);

  constructor() {
    const CustomHelloComponent = createCustomElement(HelloComponent, {injector: this.injector});

    customElements.define('custom-hello', CustomHelloComponent);
  }

  ngDoBootstrap() {}
}
