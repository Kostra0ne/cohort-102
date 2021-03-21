import React, { Component } from 'react';
import FoodForm from './FoodForm';
import Search from './Search';
import FoodBox from './FoodBox';
import foodsJSON from '../foods.json';

class Foods extends Component {
  // Initial state
  state = {
    formVisibile: false,
    foods: foodsJSON,
    searchValue: '',
    selectedFoods: [],
  };

  handleSearch = (_, value) => {
    this.setState({ searchValue: value });
  };

  handleDisplayForm = () => {
    this.setState({ formVisibile: !this.state.formVisibile });
  };

  handleSelectedFood = (food) => {
    const selectedFoods = this.state.selectedFoods.slice(); // <---- Makes a copy of an array
    // const selectedFoods = [...this.state.selectedFoods]; // <--- Makes a copy of an array
    // const selectedFoods = this.state.selectedFoods.map(food => food); // <---- Makes a copy of an array

    /** Idea of adding a food to the selectedFoods array
     *  We first want to know if the food we just selected
     *  already exists in the array, the only unique element we have is the name
     *  Array.prototype.findIndex() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
     *  returns the index of the found element or returns -1 if it doesnt exist in the array.
     *
     *  If an element is found, we just want to add the quantity and calories to it.
     *  But since we will be modifying an element in the state (the object in the array),
     *  we first need to make a copy of that element, modify it and replace the old object in the array
     *
     *  Else we just multiply the quantity and the calories and add it to the array
     *
     */

    const foundIndex = selectedFoods.findIndex(
      (foodInArray) => foodInArray.name === food.name
    );

    food.calories *= food.quantity;

    if (foundIndex !== -1) {
      // If we're here it means the element already exists in the selectedFoods array.
      const foundCopy = { ...selectedFoods[foundIndex] }; // Make a copy

      foundCopy.quantity += food.quantity;
      foundCopy.calories += food.calories;
      selectedFoods.splice(foundIndex, 1, foundCopy); // Splice on the copied array and replace with the copy
      this.setState({ selectedFoods });

      // The method below does the same as splice

      // this.setState({
      //   selectedFoods: this.state.selectedFoods.map((foodinArray) =>
      //     foodinArray === selectedFoods[foundIndex] ? foundCopy : foodinArray
      //   ),
      // });
    } else {
      selectedFoods.push(food);
      this.setState({ selectedFoods: selectedFoods });
    }
  };

  handleNewFood = (newFood) => {
    // This method is passed to the FoodForm, when the form is submitted
    // We call this method and pass the newFood data to it and add it to the array
    this.setState({ foods: [newFood, ...this.state.foods] });
  };

  handleRemoveSelectedFood = (selectedIndex) => {
    // We pass the index of the clicked food to remove to handleRemoveSelectedFood method
    //  onClick={() => this.handleRemoveSelectedFood(index)}
    // This allows us to know which element to remove from the array

    const selectedFoods = this.state.selectedFoods.slice(); // <---- Makes a copy of an array
    // const selectedFoods = [...this.state.selectedFoods]; // <--- Makes a copy of an array
    // const selectedFoods = this.state.selectedFoods.map(food => food); // <---- Makes a copy of an array

    selectedFoods.splice(selectedIndex, 1);
    this.setState({ selectedFoods });

    // Method 2: You can do the same thing as above with the line below

    // this.setState({
    //   selectedFoods: this.state.selectedFoods.filter((food, index) => {
    //     return selectedIndex !== index;
    //   }),
    // });
  };

  render() {
    const totalCalories = this.state.selectedFoods.reduce(
      (acc, val) => acc + val.calories,
      0
    );

    return (
      <div className="Foods">
        <button className="button mb-4" onClick={this.handleDisplayForm}>
          Add food
        </button>
        {this.state.formVisibile && (
          <div className="my-4">
            <FoodForm handleAddFood={this.handleNewFood} />
          </div>
        )}
        <Search
          handleSearch={this.handleSearch}
          searchValue={this.state.searchValue}
        />

        <div className="columns">
          <div className="column">
            {this.state.foods
              .filter((food) =>
                food.name
                  .toLowerCase()
                  .includes(this.state.searchValue.toLowerCase())
              )
              .map((food, index) => {
                return (
                  <FoodBox
                    key={index}
                    food={food}
                    handleSelectedFood={this.handleSelectedFood}
                  />
                );
              })}
          </div>

          <div className="column">
            <h2 className="title">Today's food</h2>
            <ul>
              {this.state.selectedFoods.map((food, index) => {
                return (
                  <li key={index}>
                    {food.quantity} {food.name} = {food.calories} cal
                    <span
                      onClick={() => this.handleRemoveSelectedFood(index)}
                      className="icon  has-text-danger is-clickable"
                    >
                      <i class="fas fa-trash"></i>
                    </span>
                  </li>
                );
              })}
              <p className="subtitle">Total: {totalCalories} calories</p>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Foods;
