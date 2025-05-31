import React, { useState } from 'react';
import './Categories.css';
import { NavLink, Outlet, useOutletContext } from 'react-router-dom';
import Search from '../Components/Search';
import AllData from '../Data/AllData.js';

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterData = AllData.filter(plant => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="MainSection " id='maini'>
      <div className="container">
        <p>
          There Are Thousands Of Plants Avaiable In Your Website <br /> You Can Visit Them By
          Basis Of Categories
        </p>

        <div className="navBar">
          <div className="Links">
            <NavLink to="all" className="navItem">All</NavLink>
         
            <NavLink to="outdoor" className="navItem">Outdoor Plants</NavLink>
            <NavLink to="flower" className="navItem">Flowering Plants</NavLink>
          </div>
          <div className="SearchBox">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          </div>
        </div>

        <Outlet context={filterData} />
      </div>
    </div>
  );
};

export default Categories;