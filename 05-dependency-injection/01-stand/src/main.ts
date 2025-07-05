import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { inject, Inject, Injectable, InjectionToken, Injector } from '@angular/core';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


function testDI() {
  // Bad practics
  // const badToken = 'str';
  // const badToken = 123;
  // const badToken = true;

  // Norm practics
  // const normToken = {};
  // const normToken = {describe: 'Egor'};

  // Best practics
  @Injectable({providedIn: 'root'})
  class BestToken {
    private readonly depToken = inject(DepToken);

    // constructor(private readonly depToken: DepToken) {
    // constructor(@Inject(DepToken) private readonly depToken: DepToken) {
    constructor() {
      console.log('BestToken created', this.depToken)
    }
  }

  class DepToken {
    constructor() {
      console.log('DepToken created')
    }
  }

  const bestToken = new InjectionToken<string>('Best token', {providedIn: 'root', factory: () => 'Alex'});
  const pseudoToken = new InjectionToken('Pseudo token');

  const parentInjector = Injector.create({
    providers: [
      DepToken
    ]
  })

  const injector = Injector.create({
    parent: parentInjector,
    providers: [
      // {
      //   provide: bestToken, // token
      //   // useValue: 'Egor',
      //   useValue: {name: 'Egor'},
      // },
      // {
      //   provide: pseudoToken,
      //   useExisting: bestToken,
      // },
      // {
      //   provide: bestToken,
      //   useClass: BestToken,
      // },

      // {
      //   provide: BestToken,
      //   useClass: BestToken,
      // }
      BestToken,
      {
        provide: bestToken, // token
        // useFactory: () => 'Egor',
        // useFactory: () => new BestToken(),
        useFactory: () => inject(BestToken),
      },
    ],
  });
  
  console.log(injector.get(BestToken));

  // console.log(injector.get(bestToken));
  // console.log(injector.get(pseudoToken));
  // console.log(injector.get(pseudoToken) === injector.get(bestToken));

  // setTimeout(() => {
  //   console.log(injector.get(bestToken));
  //   console.log(injector.get(bestToken));
  //   console.log(injector.get(bestToken));
  //   console.log(injector.get(bestToken));
  // }, 3000)
}

testDI();
