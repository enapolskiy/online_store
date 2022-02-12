import React from 'react'
import style from './Product.module.css'
import StarIcon from '@mui/icons-material/Star';
const Product = ({title, img, price, rating}) => {
    return (
    <div className={style.product}>
        <div className={style.product__info}>
            <p>{title}</p>
            <p className={style.product__price}>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className={style.product__rating}>
                {Array(rating).fill().map((_, i) =>
                <StarIcon/>)}
            </div>
            <img className={style.product__img} src={img}/>
            <button>Add to Basket</button>
        </div>

    </div>
    )
}
export default Product;