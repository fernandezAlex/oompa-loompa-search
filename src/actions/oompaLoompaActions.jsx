import axios from "axios";

export const setError = (error) => ({
  type: "SET_ERROR",
  payload: error,
});

export const setOompaLoompas = (data) => ({
  type: "SET_OOMPA_LOOMPAS",
  payload: data,
});

export const setLoading = (isLoading) => ({
  type: "SET_LOADING",
  payload: isLoading,
});

export const setHasMore = (hasMore) => ({
  type: "SET_HAS_MORE",
  payload: hasMore,
});

export const incrementPage = () => ({
  type: "INCREMENT_PAGE",
});

export const initialFetchOompaLoompas = () => {
  return async (dispatch, getState) => {
    const { oompaLoompa } = getState();
    const { lastFetched } = oompaLoompa;

    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    const timeSinceLastFetch = lastFetched ? Date.now() - lastFetched : null;

    if (!timeSinceLastFetch || timeSinceLastFetch >= oneDayInMilliseconds) {
      dispatch(fetchMoreOompaLoompas());
    }
  };
};

export const fetchMoreOompaLoompas = () => {
  return async (dispatch, getState) => {
    const { oompaLoompa } = getState();
    const { page, hasMore, loading } = oompaLoompa;

    if (!hasMore || loading) {
      return;
    }

    dispatch(setLoading(true));

    try {
      const url = `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=${page}`;
      const response = await axios.get(url);
      const { results } = response.data;

      if (!results || results.length === 0) {
        dispatch(setHasMore(false));
      } else {
        dispatch(setOompaLoompas(results));
        dispatch(incrementPage());
      }
    } catch (error) {
      dispatch(
        setError(error.message || "An error occurred while fetching data.")
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
};
