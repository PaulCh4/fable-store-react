import React from 'react';
import axios from 'axios';

import styles from '../../styles/Collection.module.css';
import CART_IMG from "../../img/сollections/KLASSIK/jackets/Foto.png"

import CollectionItem from './CollectionItem';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom";


const Collection = () => {
    const [collections, setCollections] = useState([]) 
    const [categories, setCategories] = useState([]) 
    const [products, setProducts] = useState([]) 

    useEffect(()=>{
        axios.get(`http://localhost:3001/collection`).then(res => setCollections(res.data)).catch(
            err => console.log(err)
        )        
        axios.get(`http://localhost:3001/category`).then(res => setCategories(res.data)).catch(
            err => console.log(err)
        )  
        axios.get(`http://localhost:3001/product`).then(res => setProducts(res.data)).catch(
            err => console.log(err)
        )  
    },[])

    // console.log('<-')
    // console.log(collections)
    // console.log(categories)
    // console.log(products)
    // console.log('->')

    const [searchParams, setSearchParams] = useSearchParams();
    const collectionQuery = searchParams.get('collection') || ''
    const categoryQuery = searchParams.get('category') || ''

    if(categoryQuery === ''){
        return <div>
        {/* <CollectionItem /> */}

        {
            collections.filter(
                colletion => colletion.name.includes(collectionQuery)
              ).map(collection => (
            <div key={collection.id}>
                {/* <CollectionItem id={collection.id} name={collection.name} /> */}
                <p className={styles.title}>{collection.name}</p>
                
                {categories.filter(
                    category => products.some(product => product.category === category.id && product.collection === collection.id)
                    ).map(category => (

                        <section key={category.id}>

                            <div className={styles.collection}>
                                <p className={styles.type}>{category.name}</p>
                                <div className={styles.btnSort}>
                                    <p>Сортировать</p>
                                    <button className={styles.dropbtn}>
                                        По Цене
                                        <i class='bx bx-chevron-down' ></i>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.container}>
                                {products.filter(product => product.category === category.id && product.collection === collection.id).map(product => (
                                    <div key={product.id} className={styles.cart}>


                                        <Link to={`/product/${product.id}`}>
                                            <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                                        </Link>
                                        <p>{product.name}</p>
                                        <p>{product.price} $</p>

                                    </div>
                                ))}
                            </div>


                            
                        </section>

                    ))}


            </div>))
        }
    </div>
    }
    else{
        // category.name.includes(categoryQuery) && 
        const catQ = categories.filter(category => category.name.includes(categoryQuery))[0]
        console.log(catQ)
        

        return <div>

                <div className={styles.collection}>
                    <p className={styles.type}>{catQ.name}</p>
                    <div className={styles.btnSort}>
                        <p>Сортировать</p>
                        <button className={styles.dropbtn}>
                            По Цене
                            <i class='bx bx-chevron-down' ></i>
                        </button>
                    </div>
                </div>
                <div className={styles.container}>
                {products.filter(
                                product =>  product.category === catQ.id
                              ).map((product) => {
                                return <div key={product.id}>


                                    
                                           <div key={product.id} className={styles.cart}>


                                                <Link to={`/product/${product.id}`}>
                                                    <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                                                </Link>
                                                <p>{product.name}</p>
                                                <p>{product.price} $</p>

                                            </div>
                                    </div>
                              })}
                </div>
        </div>
    }
   
}

export default Collection














        {/* <section>
            <p className={styles.title}>FABLE OF KLASSIK</p>

            <div className={styles.collection}>
               <p className={styles.type}>Пиджаки</p>
                <div className={styles.btnSort}>
                    <p>Сортировать</p>
                    <button className={styles.dropbtn}>
                        По Цене
                        <i class='bx bx-chevron-down' ></i>
                    </button>
                </div>
            </div>
            
            <div className={styles.container}>
                <div className={styles.cart}>
                    <Link to={"#"}>
                        <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                    </Link>
                    <p>name</p>
                    <p>price</p>
                </div>
                <div className={styles.cart}>
                    <Link to={"#"}>
                        <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                    </Link>
                    <p>name</p>
                    <p>price</p>
                </div>
                <div className={styles.cart}>
                    <Link to={"#"}>
                        <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                    </Link>
                    <p>name</p>
                    <p>price</p>
                </div>
                <div className={styles.cart}>
                    <Link to={"#"}>
                        <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                    </Link>
                    <p>name</p>
                    <p>price</p>
                </div>
            </div>
        </section>         */}