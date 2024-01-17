import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Card = ({ image, firstName, gender, profession, id }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img
          src={image}
          alt={`Illustration of Oompa Loompa ${firstName}`}
          className="mb-4"
        />
        <h3 className="text-lg font-bold mb-1">{firstName}</h3>
        <p className="text-gray-700">{gender === "F" ? "Female" : "Male"}</p>
        <p className="text-gray-500">{profession}</p>
      </div>
    </Link>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
