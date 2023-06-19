import React from 'react';
import axios from 'axios';

import styles from '../../styles/Collection.module.css';
import CART_IMG from "../../img/сollections/KLASSIK/jackets/Foto.png"
// --- !

import CollectionItem from './CollectionItem';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import {useSelector, useDispatch} from 'react-redux'
import { setCollections } from '../../store/Slices/collectionsSlice';
import { setProducts } from '../../store/Slices/productsSlice';
import { setCategories } from '../../store/Slices/categoriesSlice';


const Collection = () => {

    // const [collections, setCollections] = useState([]) 
    // const [categories, setCategories] = useState([]) 
    // const [products, setProducts] = useState([]) 

    const dispatch = useDispatch()

    const collections = (useSelector((state) => state.collections))
    const categories = (useSelector((state) => state.categories))
    const products = (useSelector((state) => state.products))

    useEffect(()=>{
        axios.get(`http://localhost:3001/collection`)
        .then(res => dispatch(setCollections(res.data)))
        .catch(err => console.log(err))      

        axios.get(`http://localhost:3001/category`)
        .then(res => dispatch(setCategories(res.data)))
        .catch(err => console.log(err))  

        axios.get(`http://localhost:3001/product`)
        .then(res => dispatch(setProducts(res.data)))
        .catch(err => console.log(err))  
    },[])

    // console.log('-------!-------')
    // console.log(collections)
    // console.log(categories[1].name)
    // console.log(products)


    const [searchParams, setSearchParams] = useSearchParams();
    const collectionQuery = searchParams.get('collection') || ''
    const categoryQuery = searchParams.get('category') || ''

    // ----- Filter -----
    const [sortType, setSortType] = useState('date')

    const handleSortChange = (e) => {
        setSortType(e.target.value)
        console.log(sortType)
    }

    // ----- Category State -----
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    };


    if(categoryQuery === ''){
        return <div> 
            {/* <CollectionItem /> */}
        {
            collections
                .filter(colletion => colletion.name.includes(collectionQuery))
                .map(collection => (<div key={collection.id}>

                {/* --- CategoryList --- */}
                <p className={styles.title}>{collection.name}</p> 
                    {/* <CollectionItem id={collection.id} name={collection.name} /> */}
                
                {/* --- CategoryList --- */}
                {categories
                    .filter(category => products.some(product => product.category === category.id && product.collection === collection.id))
                    .map((category) => {
                        const filteredProducts = products
                          .filter(
                            (product) =>
                              product.category === category.id &&
                              product.collection === collection.id &&
                              (!selectedCategory || product.category === selectedCategory)
                          )
                          .sort((a, b) => {
                            if (sortType === "date") {
                              return new Date(b.dateAdded) - new Date(a.dateAdded);
                            } else if (sortType === "price") {
                              return a.price - b.price;
                            }
                          });

                    return (
                        <section key={category.id}>

                            {/* --- CategoryName&Sort Panel --- */}
                            <div className={styles.titleContainer}>
                                <p className={styles.type}>{category.name}</p>
                                {/* --- Sort Button --- */}
                                <div className={styles.btnSort}>
                                    <label htmlFor="sort-select">Сортировать </label>
                                    <select id="sort-select" className={styles.sortSelect}
                                            value={sortType} onChange={handleSortChange}>
                                        <option value="date">По новизне</option>
                                        <option value="price">По цене</option>
                                    </select>
                                </div>
                            </div>

                            {/* --- CategoryItem List --- */}
                            <div className={styles.container}>
                            {filteredProducts.map((product) => (
                                <div key={product.id} className={styles.cart}>
                                {/* --- Products(CategoryItem) --- */}
                                <Link to={`/product/${product.id}`}>
                                    <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                                </Link>
                                <p>{product.name}</p>
                                <p>{product.price} $</p>
                                </div>
                            ))}
                            </div>
                        </section>)})}
            </div>))
        }
    </div>
    }
    else{
        // // category.name.includes(categoryQuery) && 
        // const catQ = categories.filter(category => category.name.includes(categoryQuery))[0]
        // console.log(catQ)
        

        // return <div>
        //         {/* --- CategoryName&Sort Panel --- */}
        //         <div className={styles.titleContainer}>
        //             <p className={styles.type}>{catQ.name}</p>

        //             {/* --- Sort Button --- */}
        //             <div className={styles.btnSort}>
        //                 <label htmlFor="sort-select">Сортировать </label>
        //                 <select id="sort-select" className={styles.sortSelect}
        //                         value={sortType} onChange={handleSortChange}>
        //                     <option value="date">По новизне</option>
        //                     <option value="price">По цене</option>
        //                 </select>
        //             </div>
        //         </div>

        //         {/* --- ProductItem List --- */}
        //         <div className={styles.container}>
        //             {products
        //                 .filter(product =>  product.category === catQ.id)
        //                 .sort((a, b) => {
        //                     if (sortType === 'date') {
        //                     return new Date(b.dateAdded) - new Date(a.dateAdded);
        //                     } else if (sortType === 'price') {
        //                     return a.price - b.price;
        //                     }})
        //                 .map((product) => { return <div key={product.id}>

        //                         {/* --- ProductItem --- */}
        //                         <div key={product.id} className={styles.cart}>
        //                             <Link to={`/product/${product.id}`}>
        //                                 <img src={CART_IMG} className={styles.logo} alt="Stuff" />
        //                             </Link>
        //                             <p>{product.name}</p>
        //                             <p>{product.price} $</p>
        //                         </div>
        //                     </div>})}
        //         </div>
        // </div>
    }
   
}

export default Collection