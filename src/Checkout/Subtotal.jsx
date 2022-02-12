import style from './Subtotal.module.css'
import CurrencyFormat from 'react-currency-format'
const Subtotal = () => {
    return (

        <div className={style.subtotal}>
            <CurrencyFormat

                renderText={(value)=> (
                    <>
                    <p>Subtotal (0 items) :
                        <strong>0</strong>
                    </p>
                        <small className={style.subtotal__gift}>
                            <input className={style.input} type='checkbox'/>This order contains a gift
                        </small>
                    </>
            )}
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button className={style.button}>Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal;