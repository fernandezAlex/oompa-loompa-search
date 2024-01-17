import { useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOompaLoompaDetails,
  clearOompaLoompaDetails,
} from "../actions/oompaLoompaDetailsActions";
import { Loading } from "../components/Loading";

export const DetailView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { details, loading, error } = useSelector(
    (state) => state.oompaLoompaDetails
  );

  useEffect(() => {
    dispatch(fetchOompaLoompaDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(clearOompaLoompaDetails());
    };
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (details) {
    return (
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row p-10">
            <div className="flex-1 flex justify-center items-center p-10">
              <img
                src={details.image}
                alt={details.first_name}
                className="max-w-full h-auto"
              />
            </div>
            <div className="flex-1 p-10">
              <h1 className="text-2xl font-bold mb-2">{details.first_name}</h1>
              <p className="text-lg mb-4">
                {details.gender === "F" ? "Female" : "Male"}
              </p>
              <p className="text-lg mb-4">{details.profession}</p>
              <div>{parse(details.description)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>No details available</div>;
};
