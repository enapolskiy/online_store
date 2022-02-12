import React from 'react'
import style from './Product.module.css'
import StarIcon from '@mui/icons-material/Star';
import {useStateValue} from "../StateProvider";

const Product = ({id,title, img, price, rating}) => {
    const [{basket}, dispatch] = useStateValue();
    console.log('this is the basket', basket)
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                img:img,
                price:price,
                rating: rating
            }
        })
    }
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
                <button onClick={addToBasket}>Add to Basket</button>
            </div>

        </div>
    )
}
export default Product;