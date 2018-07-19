import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { InsightsEffects } from './insights.effects';
import { LoadInsights, InsightsLoaded } from './insights.actions';

import { Observable } from 'rxjs';

describe('InsightsEffects', () => {
  let actions$: Observable<any>;
  let effects$: InsightsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        InsightsEffects,
        DataPersistence,
        provideMockActions(() => actions$)
      ]
    });

    effects$ = TestBed.get(InsightsEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadInsights({}) });
      expect(effects$.loadInsights$).toBeObservable(
        hot('-a-|', { a: new InsightsLoaded({}) })
      );
    });
  });
});
