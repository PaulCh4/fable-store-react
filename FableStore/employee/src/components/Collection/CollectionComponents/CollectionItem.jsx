import React, { useState } from 'react';
import styles from '../../../styles/Collection.module.css';
import { useSelector } from 'react-redux';
import CategoryItem from './CategoryItem';

const CollectionItem = ({ collection }) => {
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);

  const filteredCategories = categories.filter(category =>
    products.some(product => product.category === category.id && product.collection === collection.id)
  );

  return (
    <div key={collection.id}>
      {/* --- Collection Title --- */}
      <p className={styles.title}>{collection.name}</p>

      {/* --- CategoryList --- */}
      {filteredCategories.map(category => {
          return <CategoryItem category={category} collection={collection}/>
      })}
    </div>
  );
};

export default CollectionItem;