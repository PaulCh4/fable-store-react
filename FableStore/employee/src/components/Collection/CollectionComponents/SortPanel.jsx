import React from 'react'
import styles from '../../../styles/Collection.module.css';

const SortPanel = ({selectedCategory, sortType, handleSortChange}) => {
    return (
        <div className={styles.titleContainer}>
            {selectedCategory && selectedCategory.name && (
                <p className={styles.type}>{selectedCategory.name}</p>
            )}

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
    )
}

export default SortPanel