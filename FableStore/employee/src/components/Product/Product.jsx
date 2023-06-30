import React from 'react'

import styles from '../../styles/Product.module.css';

import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../store/Slices/cartSlice';
import { Link } from 'react-router-dom';


const Product = () => {

    const {id} = useParams();

    const product = (useSelector((state) => state.products))[id]
    const collectionName = (useSelector((state) => state.collections))[product.collection].name
    const categoryName = (useSelector((state) => state.categories))[product.category].name
    
    // console.log('Cl: ', collection)
    // console.log('Ct: ', category)
    // console.log('P: ',product)

    const dispacth = useDispatch()
  
    const [selectedTab, setSelectedTab] = useState('description'); // начально выбрана вкладка "Описание"
  
    const handleTabSelect = (tab) => {
      setSelectedTab(tab);
    };

    const [selectedColor, setSelectedColor] = useState('Бежевый');
    const [selectedSize, setSelectedSize] = useState('XS');

    const colors = {'Бежевый': '#F4E1CC', 'Черный': '#262626', 'Индиго': '#9FAED9', 'Болотный': '#56AA91','Серый': '#707070', 'Коричневый': '#743821', 'Золотой': '#C89607', 'Зеленый': '#214133'};
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    }
    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    }

    const ProductToCart = () => {
        dispacth(addProduct( {product, size: selectedSize, color: selectedColor}))
    }

    const [addedToCart, setAddedToCart] = useState(false);

    function addToCart() {
        ProductToCart();
        setAddedToCart(true);
      }

      
    return (
        <div>
            <div className='#'>{collectionName} - {categoryName}</div>

            <div className={styles.container}>
                <section>
                    <img src={product.image} className={styles.logo} alt="Stuff" />
                </section>
                <section>
                    <p>{product.name}</p>
                    <p>{product.price} $</p>

                    {/* *** Color Buttons *** */}
                    <div style={{display: 'flex', minHeight: '50px'}}>
                    {Object.keys(colors).map((color) => (
                        <div 
                        key={color} 
                        style={{ 
                            backgroundColor: colors[color], 
                            border: selectedColor === color ? '2px solid black' : '',
                            minWidth: '30px',
                            height: '30px',
                            marginRight: '10px',
                            cursor: 'pointer'
                        }} 
                        onClick={() => handleColorSelect(color)}
                        />
                    ))}
                    </div>
                    
                    {/* *** Size Buttons *** */}
                    <div style={{display: 'flex', minHeight: '50px'}}>
                        {sizes.map((size, index) => (
                            <div 
                            key={index}
                            style={{
                                backgroundColor: 'white',
                                border: selectedSize === size ? '2px solid black' : '',
                                width: '30px',
                                height: '30px',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} 
                            onClick={() => handleSizeSelect(size)}>
                               {size} 
                            </div>
                        ))}
                    </div>

                    {addedToCart ? (
                        <button>
                            <Link to="/cart" className="button green">Перейти в корзину</Link>
                        </button>
                        ) : (
                        <button className="button" onClick={addToCart}>
                            Добавить в корзину
                        </button>
                        )}
                    
                    {/* Description Panel */}
                    <div style={{ marginTop: '50px' }}>
                        <div style={{ display: 'flex', marginBottom: '20px' }}>
                            <div 
                            style={{ 
                                color: selectedTab === 'description' ? 'black' : 'gray',
                                padding: '10px',
                                marginRight: '10px',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleTabSelect('description')}
                            >
                            Описание
                            </div>
                            <div 
                            style={{ 
                                color: selectedTab === 'sizes' ? 'black' : 'gray',
                                padding: '10px',
                                marginRight: '10px',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleTabSelect('sizes')}
                            >
                            Размеры
                            </div>
                            <div 
                            style={{ 
                                color: selectedTab === 'fabric' ? 'black' : 'gray',
                                padding: '10px',
                                marginRight: '10px',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleTabSelect('fabric')}
                            >
                            Ткань
                            </div>
                            <div 
                            style={{ 
                                color: selectedTab === 'delivery' ? 'black' : 'gray',
                                padding: '10px',
                                marginRight: '10px',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleTabSelect('delivery')}
                            >
                            Доставка
                            </div>
                        </div>

                    {/* Text */}
                    {selectedTab === 'description' && (
                        <div>
                        <p>{product.details}</p>
                        </div>
                    )}
                    {selectedTab === 'sizes' && (
                    <div>
                        <p>XS, S, M, L, XL</p>
                    </div>
                    )}
                    {selectedTab === 'fabric' && (
                        <div>
                        <p>100% хлопок</p>
                        </div>
                    )}
                    {selectedTab === 'delivery' && (
                        <div>
                        <p>Мы доставим ваш товар в течение 3-5 рабочих дней</p>
                        </div>
                    )}
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Product;








