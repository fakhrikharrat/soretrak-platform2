import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiModule } from '@soretrak-platform/ui';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('@soretrak-platform/feature-main').then(
            (module) => module.FeatureMainModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('@soretrak-platform/feature-about').then(
            (module) => module.FeatureAboutModule
          ),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
