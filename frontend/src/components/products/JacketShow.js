import React, { useEffect, useState } from "react";
import jacketService from "../../services/jackets";

const AvailableIcon = (props) => {
  if (props.availability) {
    return <button className="ui green button">Available</button>;
  } else {
    return <button className="ui red button">Not available</button>;
  }
};

const JacketShow = (props) => {
  const { id } = props.match.params;

  const [jacket, setJacket] = useState({});
  const [availability, setAvailability] = useState(undefined);

  useEffect(() => {
    jacketService.getOne(id).then((response) => {
      setJacket(response);
    });
  }, []);

  useEffect(() => {
    jacketService.getAvailability(id).then((response) => {
      setAvailability(response.result);
    });
  }, []);

  if (availability === undefined) {
    return <div className="ui active centered inline large loader"></div>;
  } else {
    return (
      <div>
        {jacket.name}

        <AvailableIcon availability={availability} />
      </div>
    );
  }
};

export default JacketShow;
