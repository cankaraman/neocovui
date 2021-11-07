import React from "react";
import PropTypes from "prop-types";

export default function Card({
  firstName,
  lastName,
  status,
  updated,
  entryDate,
}) {
  const theme = "light";
  return (
    <div className={`card bg-${theme}`}>
      <p className="center-text">
        {firstName} {lastName}
      </p>
      <h5 className="center-text">{status}</h5>
      <p className="center-text">Last updated: {updated}</p>
      {/* <h2 className="center-text">{entryDate}</h2> */}
    </div>
  );
}

// {/* {children} */}
// {/* <img className="avatar" src={avatar} alt={`Avatar for ${status}`} /> */}
Card.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  entryDate: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
};
