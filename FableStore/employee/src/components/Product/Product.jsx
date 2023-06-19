import React from 'react'

import styles from '../../styles/Collection.module.css';
import CART_IMG from "../../img/сollections/KLASSIK/jackets/Foto.png"
// --- !

import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux'



const Product = () => {

    const {id} = useParams();

    const product = (useSelector((state) => state.products))[id]
    const collectionName = (useSelector((state) => state.collections))[product.collection].name
    const categoryName = (useSelector((state) => state.categories))[product.category].name
    
    // console.log('Cl: ', collection)
    // console.log('Ct: ', category)
    // console.log('P: ',product)




    return (
        <div>
            <div className='#'>{collectionName} - {categoryName}</div>

            <div className={styles.container}>
                <section>
                    <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                    {/* <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                    <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                    <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                    <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                    <img src={CART_IMG} className={styles.logo} alt="Stuff" /> */}
                </section>
                <section>
                    <p>{product.name}</p>
                    <p>{product.price} $</p>

                    {/* color&size to cart ctate ---- REDUX --- ! */}
                    <div>color color color</div>
                    <div>size size size</div>
                    <button>Добавить в корзину</button>
                    <div>
                        <p>
                            ОПИСАНИЕ {product.details}
                        </p>
                        {/* <p>
                            Размеры {product.details}
                        </p>
                        <p>
                            Ткань {product.details}
                        </p>
                        <p>
                            Доставка & Возврат {product.details}
                        </p> */}
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Product;
