import axios from "axios";

export const setOompaLoompaDetails = (details) => ({
  type: "SET_OOMPA_LOOMPA_DETAILS",
  payload: details,
});

export const setLoadingDetails = (isLoading) => ({
  type: "SET_LOADING_DETAILS",
  payload: isLoading,
});

export const setErrorDetails = (error) => ({
  type: "SET_ERROR_DETAILS",
  payload: error,
});

export const clearOompaLoompaDetails = () => ({
  type: "CLEAR_OOMPA_LOOMPA_DETAILS",
});

export const fetchOompaLoompaDetails = (id) => {
  return async (dispatch) => {
    dispatch(setLoadingDetails(true));

    try {
      const url = `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`;

      const response = await axios.get(url);

      dispatch(setOompaLoompaDetails(response.data));
    } catch (error) {
      dispatch(
        setErrorDetails(
          error.message || "An error occurred while fetching details."
        )
      );
    } finally {
      dispatch(setLoadingDetails(false));
    }
  };
};
