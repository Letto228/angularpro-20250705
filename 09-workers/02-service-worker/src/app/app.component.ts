import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SwPush, SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-worker';

  private readonly swUpdate = inject(SwUpdate);
  private readonly swPush = inject(SwPush);
  private readonly domSanitizer = inject(DomSanitizer)

  constructor() {
    // this.domSanitizer.sanitize()

    this.swUpdate.versionUpdates
      .pipe(filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY'))
      .subscribe(() => {
        if (confirm('Есть новая версия микрофронта - перезагрузить приложение')) {
          document.location.reload();
        }
      });

    // this.swUpdate.checkForUpdate().then(needUpdate => {
    //   if (!needUpdate) {
    //     return;
    //   }

    //   if (confirm('Есть новая версия микрофронта - перезагрузить приложение')) {
    //     document.location.reload();
    //   }
    // });

    // timer(1000 * 60 * 60)
    //   .pipe(
    //     switchMap(() => this.swUpdate.checkForUpdate()),
    //     filter(Boolean),
    //   )
    //   .subscribe(() => {
    //     if (confirm('Есть новая вресия приложения, перезагрузить?')) {
    //       document.location.reload();
    //     }
    //   });

    // ------------------------------------------------------------------------------------

    Notification.requestPermission().then(permissionResult => {
      if (permissionResult === 'granted') {
        console.log('Con show notification');
      }
    });

    // this.swPush.requestSubscription({serverPublicKey: ''}).then();

    this.swPush.messages.subscribe(message => {
      console.log(message);
    });
  }
}
