import React from 'react'
import Meal from './Meal'

const AvailableMeals = () => {
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];

      const mealList = DUMMY_MEALS.map(meal => <Meal id={meal.id} name={meal.name} desc={meal.description} price={meal.price}  />)

      console.log(mealList)
  return (
<React.Fragment>
{mealList}
</React.Fragment>


  )
}

export default AvailableMeals