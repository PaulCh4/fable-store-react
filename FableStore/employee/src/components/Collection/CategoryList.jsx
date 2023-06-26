import React from 'react'

import styles from '../../styles/Collection.module.css';
import SortPanel from './CollectionComponents/SortPanel';

import { useState} from 'react';
import { Link } from "react-router-dom";

import {useSelector} from 'react-redux'



const CategoryList = ({categoryQuery}) => {

    const products = (useSelector((state) => state.products))
    const categories = (useSelector((state) => state.categories))

    const selectedCategory = categories.filter(category => category.name.includes(categoryQuery))[0]
    console.log(selectedCategory)

    // ----- Filter -----
    const [sortType, setSortType] = useState('date')

    const handleSortChange = (e) => {
        setSortType(e.target.value)
    }


    return <div>
            {/* --- CategoryName&Sort Panel --- */}
            <SortPanel selectedCategory={selectedCategory} sortType={sortType} handleSortChange={handleSortChange}/>

            {/* --- ProductItem List --- */}
            <div className={styles.container}>
                {products
                    .filter(product =>  product.category === selectedCategory.id)
                    .sort((a, b) => {
                        if (sortType === 'date') {
                        return new Date(b.dateAdded) - new Date(a.dateAdded);
                        } else if (sortType === 'price') {
                        return a.price - b.price;
                        }})
                    .map((product) => { return <div key={product.id}>

                            {/* --- ProductItem --- */}
                            <div key={product.id} className={styles.cart}>
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.image} className={styles.logo} alt="Stuff" />
                                </Link>
                                <p>{product.name}</p>
                                <p>{product.price} $</p>
                            </div>
                        </div>})}
            </div>
        </div>

}

export default CategoryList
