import React from 'react';
import CollectionItem from './CollectionComponents/CollectionItem';
import { useSelector } from 'react-redux';

const CollectionList = ({ collectionQuery }) => {
  const collections = useSelector(state => state.collections);

  return (
    <div>
      {collections.map(collection =>
        collection.name.includes(collectionQuery) && <CollectionItem key={collection.id} collection={collection} />
      )}
    </div>
  );
};

export default CollectionList;

























// import React from 'react';

// import styles from '../../styles/Collection.module.css';
// import CART_IMG from "../../img/сollections/KLASSIK/jackets/Foto.png"
// import SortPanel from './CollectionComponents/SortPanel';

// import { useState } from 'react';
// import { Link } from "react-router-dom";

// import {useSelector} from 'react-redux'



// const CollectionList = ({collectionQuery}) => {

//     const collections = (useSelector((state) => state.collections))
//     const categories = (useSelector((state) => state.categories))
//     const products = (useSelector((state) => state.products))

//     // ----- Filter -----       
//     const [sortType, setSortType] = useState('date')

//     const handleSortChange = (e) => {
//         setSortType(e.target.value)
//     }

//     // ----- Category State -----
//     const [selectedCategory, setSelectedCategory] = useState(categories[null]);

//     const handleCategoryChange = (e) => {
//         setSelectedCategory(e.target.value);
//     };
    

//     return (
//         <div> 
//             {
//                 collections
//                     .filter(colletion => colletion.name.includes(collectionQuery))
//                     .map(collection => 
//                         (<div key={collection.id}>

//                             {/* --- CategoryList --- */}
//                             <p className={styles.title}>{collection.name}</p> 
                            
//                             {/* --- CategoryList --- */}
//                             {categories
//                                 .filter(category => products.some(product => product.category === category.id && product.collection === collection.id))
//                                 .map((category) => {
//                                     const filteredProducts = products
//                                     .filter(
//                                         (product) =>
//                                         product.category === category.id &&
//                                         product.collection === collection.id &&
//                                         (!selectedCategory || product.category === selectedCategory)
//                                     )
//                                     .sort((a, b) => {
//                                         if (sortType === "date") {
//                                         return new Date(b.dateAdded) - new Date(a.dateAdded);
//                                         } else if (sortType === "price") {
//                                         return a.price - b.price;
//                                         }
//                                     });

//                                     return (
//                                         <section key={category.id}>
//                                             {/* --- CategoryName&Sort Panel --- */}
//                                             <SortPanel 
//                                                 selectedCategory={selectedCategory} 
//                                                 sortType={sortType} 
//                                                 handleSortChange={handleSortChange}
//                                             />

//                                             {/* --- CategoryItem List --- */}
//                                             <div className={styles.container}>
//                                                 {filteredProducts.map((product) => (
//                                                     <div key={product.id} className={styles.cart}>
//                                                     {/* --- Products(CategoryItem) --- */}
//                                                     <Link to={`/product/${product.id}`}>
//                                                         <img src={CART_IMG} className={styles.logo} alt="Stuff" />
//                                                     </Link>
//                                                     <p>{product.name}</p>
//                                                     <p>{product.price} $</p>
//                                                     </div>))
//                                                 }
//                                             </div>
//                                         </section>)})}
//                         </div>))
//             }
//         </div>
//     )
// }

// export default CollectionList;
