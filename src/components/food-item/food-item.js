import React from 'react';
import FoodForm from '../food-form/food-form';

const FoodItem = (food) => {
  return (
    <article>
      <div className="food-header">
        <header>
          <p>{food.foodName}</p>
        </header>
      </div>
      <div className="food-header-wrapper">
        <div className="food-content">
          <p>Grams:</p>
          <p>{food.foodGrams}</p>
        </div>
        <div className="food-content">
          <p>Carbs:</p>
          <p>{food.foodCarbs}</p>
        </div>
        <div className="food-content">
          <p>Protein:</p>
          <p>{food.foodProt}</p>
        </div>
        <div className="food-content">
          <p>Fats:</p>
          <p>{food.foodFats}</p>
        </div>
      </div>
    </article>
  );
};

export default FoodItem;
