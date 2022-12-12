import React from 'react';

const FoodItem = ({ food }) => (
  <article className="section-container">
    <div className="food-header-wrapper">
      <h2 className="food-header">{food.foodName}</h2>
    </div>
    <div className="food-content">
      <div>
        <p>Grams:</p>
        <p>{food.foodGrams}</p>
      </div>
      <div>
        <p>Carbs:</p>
        <p>{food.foodCarbs}</p>
      </div>
      <div>
        <p>Protein:</p>
        <p>{food.foodProtein}</p>
      </div>
      <div>
        <p>Fats:</p>
        <p>{food.foodFats}</p>
      </div>
    </div>
  </article>
);

export default FoodItem;
