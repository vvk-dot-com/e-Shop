import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to="/" style={{textDecoration:"none"}}>
      <div className="header_logo">
        <StoreIcon className='header_logoImage' fontSize='large'/>
        <h2 className='header_logoTitle'>eSHOP</h2>
      </div>
      
        

      <div className="header_search">
        <input type="text" className='header_searchInput' />
        < SearchIcon className='header_searchIcon' />        
      </div>

      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign-in</span>
          
          
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">your</span>
          <span className="nav_itemLineTwo">shop</span> 
        </div>
        
        <div className="nav_itemBasket">
               <ShoppingBasketIcon />
          <span className="nav_basketCount">0</span>
        </div>

      </div>
</Link>
    </div>
  )
}

export default Header;