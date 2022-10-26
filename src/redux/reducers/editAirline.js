import { EDIT_AIRLINE_PENDING, EDIT_AIRLINE_SUCCESS } from "../actions/types";

const initialState = {
  airlines: [],
  isLoading: false,
  error: null,
};

const editAirlinesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_AIRLINE_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_AIRLINE_SUCCESS:
      return {
        ...state,
        airlines: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default editAirlinesReducer;
