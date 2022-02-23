import style from './Home.module.css'
import Product from "../Product/Product";

const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.home_container}>
                {/*<img className={style.home__title} src='https://kcentr.ru/upload/1369093235.png'/>*/}
                <img className={style.home__title} src='https://s.alicdn.com/@img/imgextra/i4/O1CN01yDTr7T1ifZE4Po81r_!!6000000004440-0-tps-968-230.jpg'/>
            </div>

            <div className={`${style.home__row} ${style.home__row1}`}>
                <Product title='Fire-Boltt BN1400 Bluetooth Wireless In Ear Earphones with Mic (Black)'
                         price={1699.99}
                         img='https://images-eu.ssl-images-amazon.com/images/I/31ekJkeWv8S._AC_SX184_.jpg'
                         rating={3}

                />
                <Product title='Boult Audio AirBass Livebuds Bluetooth Truly Wireless in Ear Earbuds with Mic (Red)'
                         price={1299.99}
                         img='https://images-eu.ssl-images-amazon.com/images/I/31gTXiH8jeL._AC_SX184_.jpg'
                         rating={4}

                />
                <Product title='Infinity (JBL) Glide 500, 20 Hrs Playtime with Quick Charge, Wireless On Ear Headphone with Mic, Deep Bass, Dual Equalizer, Bluetooth 5.0 with Voice Assistant Support (Black)'
                         price={1599.99}
                         img='https://images-eu.ssl-images-amazon.com/images/I/415CgBOdgNL._AC_SX184_.jpg'
                         rating={4}

                />


            </div>
            <div className={style.home__row}>

                    <Product
                             title='Samsung 24 inch (60.4 cm) IPS, 3 Side Bezel Less Flat LED Monitor (Dark Blue Gray) 75 Hz - LS24R356FHWXXL'
                             price={17999.99}
                             img='https://images-eu.ssl-images-amazon.com/images/I/41ui6ON5ULL._AC_SX184_.jpg'
                             rating={5}
                    />

                
                    <Product
                        title='LG 81.28 cm (32 inch) 4K-UHD (3840 x 2160) VESA Display HDR 600 Monitor, DCI-P3 95%, Radeon FreeSync, Inbuilt Speaker (5W x 2), Height/Tilt Adjustable Stand, Display Port - 32UL750 (White)'
                        price={14799}
                        img='https://images-eu.ssl-images-amazon.com/images/I/41FqZ6yJNuL._AC_SX184_.jpg'
                        rating={5}
                    />

            </div>
            <div className={style.home__row}>
                <Product title='Redmi 10 Prime (Astral White 4GB RAM 64GB ROM |Helio G88 with extendable RAM Upto 2GB |FHD+ 90Hz Adaptive Sync Display)'
                         price={12599}
                         img='https://m.media-amazon.com/images/I/71q297sVv3L._SL1500_.jpg'
                         rating={5}

                />
                <Product title='Redmi Note 10 Pro (Dark Night, 6GB RAM, 128GB Storage) -120hz Super Amoled Display|64MPwith 5mp Super Tele-Macro'
                         price={17499}
                         img='https://m.media-amazon.com/images/I/81S-XYJlzTL._SL1500_.jpg'
                         rating={4}

                />
                <Product title='Redmi Note 11T 5G (Matte Black 6GB RAM 128GB ROM) | Dimensity 810 5G | 33W Pro Fast Charging'
                         price={15999}
                         img='https://m.media-amazon.com/images/I/7155Pasn1aL._SL1500_.jpg'
                         rating={5}

                />
            </div>

        </div>
    )
}
export default Home;