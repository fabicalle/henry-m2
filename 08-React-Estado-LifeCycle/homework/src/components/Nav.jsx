import React from 'react';
import Logo from './logoHenry.png'
import SearchBar from './SearchBar.jsx';


function Nav({onSearch}) {
  return (
    <div >
      <img src={Logo}  alt="Logo" />
      <SearchBar onSearch={onSearch}  />
    </div>
  );
};

export default Nav;
