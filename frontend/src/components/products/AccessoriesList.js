import React, { useEffect, useState } from "react";
import accessoriesService from "../../services/accessories";
import { Link } from "react-router-dom";

const AccessoriesList = () => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    accessoriesService.getAll().then((response) => {
      setAccessories(response);
    });
  }, []);

  const rows = () => {
    return accessories.map((accessories) => (
      <div key={accessories.id}>
        {accessories.name}
        <div className="right floated content">
          <Link
            to={`/products/accessories/${accessories.id}`}
            className="ui button primary"
          >
            Show availability
          </Link>
        </div>
      </div>
    ));
  };

  if (accessories.length === 0) {
    return (
      <div className="ui active centered inline large loader"></div>
    );
  } else {
    return <div>{rows()}</div>;
  }
};

export default AccessoriesList;
