import React, { useEffect, useState } from "react";
import shirtService from "../../services/shirts";

const AvailableIcon = (props) => {
  if (props.availability) {
    return <i className="ui green button">Available</i>;
  } else {
    return <div className="ui red button">Not available</div>;
  }
};

const ShirtShow = (props) => {
  const { id } = props.match.params;

  const [shirt, setShirt] = useState({});
  const [availability, setAvailability] = useState(undefined);

  useEffect(() => {
    shirtService.getOne(id).then((response) => {
      setShirt(response);
    });
  }, []);

  useEffect(() => {
    shirtService.getAvailability(id).then((response) => {
      setAvailability(response.result);
    });
  }, []);

  if (availability === undefined) {
    return <div className="ui active centered inline large loader"></div>;
  } else {
    return (
      <div>
        {shirt.name}

        <AvailableIcon availability={availability} />
      </div>
    );
  }
};

export default ShirtShow;

