const initialState = {
  data: [],
  lastFetched: null,
  page: 1,
  hasMore: true,
  loading: false,
  error: null,
};

const oompaLoompaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_OOMPA_LOOMPAS":
      return {
        ...state,
        data: [...state.data, ...action.payload],
        lastFetched: Date.now(),
      };
    case "INCREMENT_PAGE":
      return {
        ...state,
        page: state.page + 1,
      };
    case "SET_HAS_MORE":
      return {
        ...state,
        hasMore: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default oompaLoompaReducer;
