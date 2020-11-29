import React, { useEffect, useState } from "react";
import jacketService from "../../services/jackets";
import { Link } from "react-router-dom";

const JacketList = () => {
  const [jackets, setJackets] = useState([]);

  useEffect(() => {
    jacketService.getAll().then((response) => {
      setJackets(response);
    });
  }, []);

  const rows = () => {
    return jackets.map((jacket) => (
      <div key={jacket.id}>
        {jacket.name}
        <div className="right floated content">
          <Link
            to={`/products/jackets/${jacket.id}`}
            className="ui button primary"
          >
            Show availability
          </Link>
        </div>
      </div>
    ));
  };

  if (jackets.length === 0) {
    return (
      <div className="ui active centered inline large loader"></div>
    );
  } else {
    return <div>{rows()}</div>;
  }
};

export default JacketList;
