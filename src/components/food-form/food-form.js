import React from 'react';
import '../../global.css';
import Input from '../input/input';

const FoodForm = () => (
  <form>
    <header>
      <h1>Food Macros</h1>
    </header>
    <Input />
    <label className="label">
      Food name:
      <input
        className="input"
        name="foodName"
        placeholder="Apple"
        id="foodName"
      />
    </label>
    <div className="food-header-wrapper">
      <label className="label half">
        Food grams:
        <input
          className="input"
          name="foodGrams"
          type="number"
          placeholder="100"
          id="foodGrams"
        />
      </label>
      <label className="label half">
        Food carbs:
        <input
          className="input"
          name="foodCarbs"
          type="number"
          placeholder="50"
          id="foodCarbs"
        />
      </label>
    </div>

    <div className="food-header-wrapper">
      <label className="label half">
        Food protein:
        <input
          className="input"
          name="foodProtein"
          type="number"
          id="foodProtein"
          placeholder="50"
        />
      </label>
      <label className="label half">
        Food fats:
        <input
          className="input"
          name="foodFats"
          type="number"
          id="foodFats"
          placeholder="50"
        />
      </label>
    </div>
    <button className="button" type="submit">
      Submit
    </button>
  </form>
);

export default FoodForm;
