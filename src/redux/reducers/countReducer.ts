import { CountActions } from "../actions/countActions";

type CountState = {
  count: number;
};

const initialState: CountState = {
  count: 0,
};

//important: return type is very helpful to avoid 'never'
const CountReducer = (
  state: CountState = initialState,
  action: CountActions
): CountState => {
  switch (action.type) {
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export default CountReducer;
