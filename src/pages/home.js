import React, { useState } from 'react';
import FoodForm from '../components/food-form/food-form';
import FoodItem from '../components/food-item/food-item';

export const Home = () => {
  const [foodlist, setFoodList] = useState([]);

  const onSubmitFood = (inputData) => {
    setFoodList((prevValues) => [...prevValues, inputData]);
    console.log(inputData);
  };

  return (
    <main>
      <section>
        <FoodForm onSubmit={onSubmitFood} />
      </section>

      <section>
        <FoodItem />
      </section>
    </main>
  );
};
