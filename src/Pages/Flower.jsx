import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Card from '../Components/Card.jsx';
import './Flower.css';

const Flower = ({ClickCart}) => {
  const filteredData = useOutletContext();
  const flowerData = filteredData.filter(plant => plant.category === 'flower');

  const row1 = flowerData.slice(0, 2);
  const row2 = flowerData.slice(2, 4);

  return (
    <div className="cards">
      <div className="row">
        {row1.map((plant) => (
          <Card
            key={plant.id}
            name={plant.name}
            image={plant.image}
            description={plant.description}
            price={plant.price}
            category={plant.category}
             addToCart={() => ClickCart(plant)} 
          />
        ))}
      </div>
      <div className="row">
        {row2.map((plant) => (
          <Card
            key={plant.id}
            name={plant.name}
            image={plant.image}
            description={plant.description}
            price={plant.price}
            category={plant.category}
             addToCart={() => ClickCart(plant)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Flower;
