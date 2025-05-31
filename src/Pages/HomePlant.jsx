import React from 'react';
import Card from '../Components/Card';
import './HomePlant.css';
import { useOutletContext } from 'react-router-dom';

const HomePlant = ({ ClickCart }) => {
  const filterData = useOutletContext();

  return (
    <div>
      <div className="Cards">
        <div className="row1">
          {filterData.slice(0, 4).map((plant) => (
            <Card
              key={plant.id}
              id={plant.id}
              name={plant.name}
              category={plant.category}
              price={plant.price}
              image={plant.image}
              description={plant.description}
              addToCart={() => ClickCart(plant)}  // yahan addToCart ban raha hai prop
            />
          ))}
        </div>
        <div className="row2">
          {filterData.slice(4, 8).map((plant) => (
            <Card
              key={plant.id}
              id={plant.id}
              name={plant.name}
              category={plant.category}
              price={plant.price}
              image={plant.image}
              description={plant.description}
              addToCart={() => ClickCart(plant)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePlant;
