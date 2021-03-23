import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class TotoList extends React.Component {
  state = {
    totos: [],
  };

  getAll() {
    axios
      .get("http://localhost:4000/api/totos")
      .then((response) => {
        this.setState({ totos: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getAll();
  }

  handleDelete = (id) => {
    // axios stuff overhere
    // then you get the reponse
    // meaning it got deleted
    //this.getAll();
  };

  render() {
    return (
      <div>
        <p>Toto List</p>
        <div>
          {this.state.totos.map((oneToto) => {
            return (
              <div>
                <p>{oneToto.name}</p>
                <img src={oneToto.image} alt="" />
                <Link to={`/toto/${oneToto._id}/edit`}>Edit</Link>
                <button>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TotoList;
