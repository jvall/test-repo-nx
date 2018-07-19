import { Action } from '@ngrx/store';
import { InsightsActions, InsightsActionTypes } from './insights.actions';

/**
 * Interface for the 'Insights' data used in
 *  - InsightsState, and
 *  - insightsReducer
 */
export interface InsightsData { }

/**
 * Interface to the part of the Store containing InsightsState
 * and other information related to InsightsData.
 */
export interface InsightsState {
  readonly insights: InsightsData;
}

export const initialState: InsightsData = {};

export function insightsReducer(
  state = initialState,
  action: InsightsActions
): InsightsData {
  switch (action.type) {
    case InsightsActionTypes.InsightsAction:
      return state;

    case InsightsActionTypes.InsightsLoaded: {
      return {
        ...state, ...action.payload
      };
    }

    default:
      return state;
  }
}
