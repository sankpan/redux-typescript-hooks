import { NameActions } from "../actions/nameActions";

type NameState = {
  name: string;
};

const initialState: NameState = { name: "" };

//important: return type is very helpful to avoid 'never'
const NameReducer = (
  state: NameState = initialState,
  action: NameActions
): NameState => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default NameReducer;
