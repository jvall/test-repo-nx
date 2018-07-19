import { InsightsLoaded } from './insights.actions';
import { insightsReducer, initialState } from './insights.reducer';

describe('insightsReducer', () => {
  it('should work', () => {
    const action: InsightsLoaded = new InsightsLoaded({});
    const actual = insightsReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
