import React, { useState } from 'react';
import '../../global.css';
import Input from '../input/input';

const FoodForm = ({ onSubmit }) => {
  const [values, setValues] = useState({
    foodName: '',
    foodGrams: '',
    foodCarbs: '',
    foodProtein: '',
    foodFats: '',
  });

  const handleOnInputChange = (event) => {
    const { value, name } = event.target;
    setValues((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <header>
        <h1>Food Macros</h1>
      </header>
      <Input
        labelText="Food name"
        name="foodName"
        placeholder="Apple"
        id="foodName"
        value={values.foodName}
        onChange={handleOnInputChange}
      />

      <div className="input-group-wrapper">
        <Input
          labelText="Food grams"
          name="foodGrams"
          type="number"
          placeholder="100"
          id="foodGrams"
          values={values.foodGrams}
          onChange={handleOnInputChange}
          half
        />
        <Input
          labelText="Food carbs"
          name="foodCarbs"
          type="number"
          placeholder="50"
          id="foodCarbs"
          values={values.foodCarbs}
          onChange={handleOnInputChange}
          half
        />
      </div>

      <div className="input-group-wrapper">
        <Input
          labelText="Food protein"
          name="foodProtein"
          type="number"
          id="foodProtein"
          placeholder="50"
          values={values.foodProtein}
          onChange={handleOnInputChange}
          half
        />
        <Input
          labelText="Food fats"
          name="foodFats"
          type="number"
          id="foodFats"
          placeholder="50"
          values={values.foodFats}
          onChange={handleOnInputChange}
          half
        />
      </div>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FoodForm;
