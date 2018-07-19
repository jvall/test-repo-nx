import { Action } from '@ngrx/store';

export enum InsightsActionTypes {
  InsightsAction = '[Insights] Action',
  LoadInsights = '[Insights] Load Data',
  InsightsLoaded = '[Insights] Data Loaded'
}

export class Insights implements Action {
  readonly type = InsightsActionTypes.InsightsAction;
}
export class LoadInsights implements Action {
  readonly type = InsightsActionTypes.LoadInsights;
  constructor(public payload: any) {}
}

export class InsightsLoaded implements Action {
  readonly type = InsightsActionTypes.InsightsLoaded;
  constructor(public payload: any) {}
}

export type InsightsActions = Insights | LoadInsights | InsightsLoaded;
