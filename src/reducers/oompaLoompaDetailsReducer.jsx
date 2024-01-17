const initialState = {
  details: null,
  loading: false,
  error: null,
  lastFetched: null,
};

const oompaLoompaDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_OOMPA_LOOMPA_DETAILS":
      return {
        ...state,
        details: action.payload,
        loading: false,
        lastFetched: Date.now(),
      };
    case "SET_LOADING_DETAILS":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR_DETAILS":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "CLEAR_OOMPA_LOOMPA_DETAILS":
      return {
        ...state,
        details: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default oompaLoompaDetailsReducer;
