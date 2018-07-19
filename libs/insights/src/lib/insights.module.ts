import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  insightsReducer,
  initialState as insightsInitialState
} from './+state/insights.reducer';
import { InsightsEffects } from './+state/insights.effects';
@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),

    StoreModule.forFeature('insights', insightsReducer, {
      initialState: insightsInitialState
    }),

    EffectsModule.forFeature([InsightsEffects])
  ],
  declarations: [],
  providers: [InsightsEffects]
})
export class InsightsModule { }
