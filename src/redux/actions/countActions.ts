export interface IDecrementCountAction {
  readonly type: "DECREMENT";
}

export interface IIncrementCountAction {
  readonly type: "INCREMENT";
}

export type CountActions = IIncrementCountAction | IDecrementCountAction;
