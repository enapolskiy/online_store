import React from 'react';
import style from './Header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {NavLink} from "react-router-dom";
import {useStateValue} from "../StateProvider";
import {auth} from "../firebase";

 const Header = () => {
     const [{basket, user}, dispatch] = useStateValue();
     const handleAuthentication = () => {
         if (user) {
             auth.signOut()
         }
     }
    return (
        <div className={style.header}>
<NavLink to='/'>
            <img className={style.header__logo} src='http://pngimg.com/uploads/super_bowl/super_bowl_PNG14.png' />
</NavLink>
            <div className={style.header__search}>
                <input className={style.header__searchInput} type='text'/>
                <SearchIcon className={style.header__searchIcon}/>


            </div>
            <div className={style.header__nav}>
                <NavLink to={!user && '/login'} >
                <div className={style.header__option} onClick={handleAuthentication}>
                  <span className={style.header__optionLineOne}>Hello {!user ? 'Guest' : user.email}</span>
                    <span className={style.header__optionLineTwo}>{user ? 'Sign Out' : 'Sign In'}</span>
                </div> </NavLink>
                <div className={style.header__option}>
                    <span className={style.header__optionLineOne}>Returns</span>
                    <span className={style.header__optionLineTwo}>& Orders</span>
                </div>
                <div className={style.header__option}>
                    <span className={style.header__optionLineOne}>Your</span>
                    <span className={style.header__optionLineTwo}> Prime</span>
                </div>
                <NavLink to='/checkout'>
                <div className={style.header__optionBasket}>
                    <ShoppingBasketIcon/>
                    <span className={style.header__basketCount}>{basket?.length}</span>
                </div></NavLink>
            </div>
        </div>

    )
}

export default Header;