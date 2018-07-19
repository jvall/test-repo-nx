import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  InsightsActions,
  InsightsActionTypes,
  LoadInsights,
  InsightsLoaded
} from './insights.actions';
import { InsightsState } from './insights.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class InsightsEffects {
  @Effect() effect$ = this.actions$.ofType(InsightsActionTypes.InsightsAction);

  @Effect()
  loadInsights$ = this.dataPersistence.fetch(InsightsActionTypes.LoadInsights, {
    run: (action: LoadInsights, state: InsightsState) => {
      return new InsightsLoaded(state);
    },

    onError: (action: LoadInsights, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<InsightsState>
  ) {}
}
