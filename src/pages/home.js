import React, { useState } from 'react';
import FoodForm from '../components/food-form/food-form';

export const Home = () => {
  const [foodlist, setFoodList] = useState([]);

  const onSubmitFood = (inputData) => {
    setFoodList((prevValues) => {
      return [...prevValues, inputData];
    });
  };

  return (
    <main>
      <FoodForm onSubmit={onSubmitFood} />
    </main>
  );
};
