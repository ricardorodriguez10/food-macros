import React, { useState } from 'react';
import FoodForm from '../components/food-form/food-form';
import FoodItem from '../components/food-item/food-item';

export const Home = () => {
  const [foodlist, setFoodList] = useState([]);

  const onSubmitFood = (inputData) => {
    setFoodList((prevValues) => [...prevValues, inputData]);
  };

  return (
    <main className="view-container">
      <header>
        <h1>Food Macros</h1>
      </header>
      <section className="section-container">
        <FoodForm onSubmit={onSubmitFood} />
      </section>

      <section>
        {foodlist.map((food) => (
          <FoodItem food={food} />
        ))}
      </section>
    </main>
  );
};
