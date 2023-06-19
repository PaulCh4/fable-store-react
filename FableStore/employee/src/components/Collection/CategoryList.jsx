import React from 'react'

const CategoryList = () => {
    const catQ = categories.filter(category => category.name.includes(categoryQuery))[0]
    console.log(catQ)
    // category.name.includes(categoryQuery) && 

    return (
        <div>
            {/* --- CategoryName&Sort Panel --- */}
            <div className={styles.titleContainer}>
                <p className={styles.type}>{catQ.name}</p>

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

            {/* --- ProductItem List --- */}
            <div className={styles.container}>
                {products
                    .filter(product =>  product.category === catQ.id)
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
                                    <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                                </Link>
                                <p>{product.name}</p>
                                <p>{product.price} $</p>
                            </div>
                        </div>})}
            </div>
        </div>
  )
}

export default CategoryList
