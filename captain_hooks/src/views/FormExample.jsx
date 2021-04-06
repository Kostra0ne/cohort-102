import React from "react";
import Form from "Components/Form";
import Container from "Components/Container";

const FormExample = (props) => {
  const object = {
    something: "dfezafae",
    somethingElse: "",
  };

  return (
    <Container>
      {/* <Form something="dfezafae" somethingElse="feaoipjfeaif" /> */}
      <Form {...object} />
    </Container>
  );
};

export default FormExample;
