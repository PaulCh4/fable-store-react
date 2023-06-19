import React, { useState } from 'react';
import styles from '../../../styles/Collection.module.css';
import CART_IMG from "../../../img/сollections/KLASSIK/jackets/Foto.png"
import SortPanel from './SortPanel';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const CategoryItem = ({ category, collection }) => {

  const products = useSelector((state) => state.products);

  const [sortType, setSortType] = useState('date');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = products
          .filter(product =>
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
        <SortPanel selectedCategory={category} sortType={sortType} handleSortChange={handleSortChange}/>

        {/* --- CategoryItem List --- */}
        <div className={styles.container}>
            {filteredProducts.map(product => (
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
    </section>
);
};

export default CategoryItem;