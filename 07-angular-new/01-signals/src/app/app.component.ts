import { ChangeDetectionStrategy, Component, computed, effect, inject, Injector, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private readonly injector = inject(Injector);

  title = 'signals';

  readonly count = signal(0, {equal: (a, b) => a === b})
  // readonly count = signal(0, {equal: (a, b) => true})

  readonly double = computed(() => {
    const value = this.count() * 2;

    console.log('Computed calculated', value);

    return value;
  });

  getTitle() {
    console.log('Call CD');

    // return this.title + ': ' + this.count();
    return this.title;
  }

  constructor() {
    // console.log(this.count());

    // this.count.set(1);
    // console.log(this.count());

    // this.count.update(count => count + 1);
    // console.log(this.count());

    // setInterval(() => {
    //   this.count.update(count => count + 1);
    // }, 1000)

    // ---------------------------------------------------------------------------

    // console.log(this.double()); // cb called
    // console.log(this.double()); // cb NO called
    // console.log(this.double()); // cb NO called

    // this.count.update(count => count + 1);
    // console.log('New count signal:', this.count()); // cb called

    // console.log(this.double()); // cb called
    // console.log(this.double()); // cb NO called
    // console.log(this.double()); // cb NO called

    // ---------------------------------------------------------------------------

    // const showCount = signal(false);
    // const count = signal(0);
    // const conditionalCount = computed(() => {
    //     console.warn('Computed calculated');

    //     return showCount() ? `The count: ${count()}` : `Nothing`;
    // });
    
    // console.log(conditionalCount()); // Deps: showCount | calc
    // console.log(conditionalCount()); // Deps: showCount | no calc
    // console.log(conditionalCount()); // Deps: showCount | no calc
    
    // console.log('Update count');
    // count.update(count => count + 1);
    
    // console.log(conditionalCount()); // Deps: showCount | no calc

    // console.log('Update count');
    // count.update(count => count + 1);
    
    // console.log(conditionalCount()); // Deps: showCount | no calc
    
    // console.log('Update count');
    // count.update(count => count + 1);
    
    // console.log(conditionalCount()); // Deps: showCount | no calc

    // console.log('Show count: true');
    // showCount.set(true);
    
    // console.log(conditionalCount()); // Deps: showCount, count | calc
    // console.log(conditionalCount()); // Deps: showCount, count | no calc
    // console.log(conditionalCount()); // Deps: showCount, count | no calc
    
    // console.log('Update count');
    // count.update(count => count + 1);
    
    // console.log(conditionalCount()); // Deps: showCount, count | calc

    // console.log('Update count');
    // count.update(count => count + 1);

    // console.log(conditionalCount()); // Deps: showCount, count | calc
    
    // console.log('Update count');
    // count.update(count => count + 1);

    // console.log(conditionalCount()); // Deps: showCount, count | calc

    // console.log('Show count: true');
    // showCount.set(false);
    
    // console.log(conditionalCount()); // Deps: showCount | calc
    // console.log(conditionalCount()); // Deps: showCount | no calc
    // console.log(conditionalCount()); // Deps: showCount | no calc
    
    // console.log('Update count');
    // count.update(count => count + 1);
    
    // console.log(conditionalCount()); // Deps: showCount | no calc

    // console.log('Update count');
    // count.update(count => count + 1);

    // console.log(conditionalCount()); // Deps: showCount | no calc
    
    // console.log('Update count');
    // count.update(count => count + 1);

    // console.log(conditionalCount()); // Deps: showCount | no calc

    // ------------------------------------------------------------------------------------

    setInterval(() => {
      this.count.update(count => count + 1);
    }, 1000)

    setTimeout(() => {
      const effectRef = effect(onCleanup => {
        const timerId = setTimeout(() => {
          console.log('Test');
        }, 2000);

        const value = this.count();
        
        console.log('Effect cb: ', value);

        onCleanup(() => {
          console.log('Cleanup: ', value)
          clearTimeout(timerId);
        });
      }, {injector: this.injector});

      // effectRef.destroy();
    }, 1000)
  }
}
