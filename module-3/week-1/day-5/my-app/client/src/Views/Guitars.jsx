import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Guitars extends React.Component {
  state = {
    guitars: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/guitars")
      .then((response) => {
        this.setState({ guitars: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //   getTheResponse = () => {
  //     axios.get("http://localhost:4000/guitars").then((response) => {
  //       this.setState({ guitars: response.data });
  //     });
  //   };

  render() {
    // let guitarsArr = [];

    // for (let guitar of this.state.guitars) {
    //   guitarsArr.push(
    //     <div>
    //       <p>{guitar.name}</p>

    //       <img src={guitar.image} alt="" />
    //     </div>
    //   );
    // }

    return (
      <div>
        <h1>Guitars</h1>
        {/* <button onClick={this.getTheResponse}>Clickty click click</button> */}
        {/* {guitarsArr} */}
        {this.state.guitars.map((guitar) => (
          <div key={guitar._id}>
            <p>{guitar.name}</p>
            <img src={guitar.image} alt="" />
            <Link to={`/guitars/${guitar._id}`}>See more !</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Guitars;
