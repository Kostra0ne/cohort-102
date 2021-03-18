import React from "react";
import guitarsJSON from "../guitars.json";

const GuitarDetails = (props) => {
  const guitarID = props.match.params.uuid;

  //   const foundGuitar = guitarsJSON.filter((guitar) => guitar.uuid === guitarID);

  //   console.log(foundGuitar);

  const foundGuitar = guitarsJSON.find((guitar) => guitar.uuid === guitarID);
  console.log(foundGuitar);

  console.log(props);
  return (
    <div style={{ textAlign: "left" }}>
      <h1>Selected guitar</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <p>{props.match.params.uuid}</p>

      {/* <p>{foundGuitar[0].name}</p>
      <img src={foundGuitar[0].image} alt="" /> */}
      <p>{foundGuitar.name}</p>
      <img src={foundGuitar.image} alt="" />
    </div>
  );
};

export default GuitarDetails;
