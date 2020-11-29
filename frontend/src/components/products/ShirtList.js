import React, { useEffect, useState } from "react";
import shirtService from "../../services/shirts";
import { Link } from "react-router-dom";

const ShirtList = () => {
  const [shirts, setJackets] = useState([]);

  useEffect(() => {
    shirtService.getAll().then((response) => {
      setJackets(response);
    });
  }, []);

  const rows = () => {
    return shirts.map((shirt) => (
      <div key={shirt.id}>
        {shirt.name}
        <div className="right floated content">
          <Link
            to={`/products/shirts/${shirt.id}`}
            className="ui button primary"
          >
            Show availability
          </Link>
        </div>
      </div>
    ));
  };

  if (shirts.length === 0) {
    return (
      <div className="ui active centered inline large loader"></div>
    );
  } else {
    return <div>{rows()}</div>;
  }
};

export default ShirtList;
