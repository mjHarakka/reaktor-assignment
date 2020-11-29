import React, { useEffect, useState } from "react";
import accessoriesService from "../../services/accessories";

const AvailableIcon = (props) => {
  if (props.availability) {
    return <button className="ui green button">Available</button>;
  } else {
    return <button className="ui red button">Not available</button>;
  }
};

const AccessoriesShow = (props) => {
  const { id } = props.match.params;

  const [accessories, setAccessories] = useState({});
  const [availability, setAvailability] = useState(undefined);

  useEffect(() => {
    accessoriesService.getOne(id).then((response) => {
      setAccessories(response);
    });
  }, []);

  useEffect(() => {
    accessoriesService.getAvailability(id).then((response) => {
      setAvailability(response.result);
    });
  }, []);

  if (availability === undefined) {
    return <div className="ui active centered inline large loader"></div>;
  } else {
    return (
      <div>
        {accessories.name}

        <AvailableIcon availability={availability} />
      </div>
    );
  }
};

export default AccessoriesShow;
