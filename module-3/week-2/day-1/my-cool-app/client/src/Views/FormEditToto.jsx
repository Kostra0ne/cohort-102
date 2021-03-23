import axios from "axios";
import React from "react";

class FormEditToto extends React.Component {
  state = {
    name: "",
    image: "",
    price: 0,
    brand: "",
  };

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;

    axios
      .get(`http://localhost:4000/api/totos/${id}`)
      .then((response) => {
        const data = response.data;

        this.setState({
          name: data.name,
          image: data.image,
          price: data.price,
          brand: data.brand,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .patch(`http://localhost:4000/api/totos/${id}`, {
        name: this.state.name,
        image: this.state.image,
        price: this.state.price,
        brand: this.state.brand,
      })
      .then((response) => {
        this.props.history.push("/toto/list");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1>Hello Editing form !</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Image</label>
            <input
              onChange={this.handleChange}
              value={this.state.image}
              name="image"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">brand</label>
            <input
              onChange={this.handleChange}
              value={this.state.brand}
              name="brand"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">price</label>
            <input
              onChange={this.handleChange}
              name="price"
              type="number"
              value={this.state.price}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default FormEditToto;
