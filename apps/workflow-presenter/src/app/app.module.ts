import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { WidgetsListComponent } from './landing/widgets-list/widgets-list.component';

@NgModule({
  declarations: [AppComponent, LandingComponent, WidgetsListComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'insights',
        loadChildren: '@hotschedules/insights#InsightsModule'
      },
      {
        path: 'workflow',
        loadChildren: '@hotschedules/workflow#WorkflowModule'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
