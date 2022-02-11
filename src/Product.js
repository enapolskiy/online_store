import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
const Product = ({title, img, price, rating}) => {
    return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map((_, i) =>
                <StarIcon/>)}
            </div>
            <img className='product__img' src={img}/>
            <button>Add to Basket</button>
        </div>

    </div>
    )
}
export default Product;