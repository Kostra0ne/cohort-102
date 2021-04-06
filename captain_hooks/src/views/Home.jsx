import React from "react";
import CardResource from "Components/CardResource";
import { resources } from "data.json";
import Container from "Components/Container";
import "styles/Home.scss";
import { useCounterContext } from "Store/CounterContext";

// import { CounterContext } from "Store/CounterContext";
const Home = (props) => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  
  const allCards = resources.map((resource) => (
    <CardResource
      key={resource.url}
      url={resource.url}
      title={resource.title}
      description={resource.description}
    />
  ));

  return (
    <section className="Home">
      <h1 className="Home__title hero">React Hooks ! {counter}</h1>
      <Container>
        <div className="Home__resources">{allCards}</div>
      </Container>
    </section>
  );
};

export default Home;
