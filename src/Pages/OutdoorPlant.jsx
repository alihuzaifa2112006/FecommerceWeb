import React from 'react';
import Card from '../Components/Card';
import './OutdoorPlant.css';
import { useOutletContext } from 'react-router-dom';

const OutdoorPlant = ({ClickCart}) => {
  const filteredData = useOutletContext(); 

  const outdoorFilteredData = filteredData.filter(plant => plant.category === 'outdoor');

  return (
    <div className='outdoorPlant'>
      {outdoorFilteredData.map((plant) => (
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
  );
};

export default OutdoorPlant;
