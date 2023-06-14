import React from 'react';
import styles from '../styles/Collection.module.css';

import { Link } from "react-router-dom";
import CART_IMG from "../img/сollection/jackets/Foto.png"

const Collection = () => {
    return <div>
        <section>
            <p className={styles.title}>FABLE OF KLASSIK</p>
            {/* <p className={styles.title}>FABLE OF {title}</p> */}

            <div className={styles.collection}>
               <p className={styles.type}>Пиджаки</p>
                <form>
                    <p>Сортировать</p>
                    <p className={styles.dropbtn}>По Цене</p>
                    {/* <p className={styles.dropbtn}>{По Цене}</p> */}
                    <i className='bx bx-caret-down' ></i>
                    {/* <div className={styles.dropdown}>
                        <div className={styles.dropdown_content}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div> */}
                </form>
            </div>
            
            <div className={styles.container}>
                <div className={styles.cart}>
                    {/* ?????????????????????????/ ----  /:id*/}
                    <Link to={"#"}>
                        <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                    </Link>
                    <p>name</p>
                    <p>price</p>
                </div>
                <div className={styles.cart}>
                    {/* ?????????????????????????/ ----  /:id*/}
                    <Link to={"#"}>
                        <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                    </Link>
                    <p>name</p>
                    <p>price</p>
                </div>
                <div className={styles.cart}>
                    {/* ?????????????????????????/ ----  /:id*/}
                    <Link to={"#"}>
                        <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                    </Link>
                    <p>name</p>
                    <p>price</p>
                </div>
                <div className={styles.cart}>
                    {/* ?????????????????????????/ ----  /:id*/}
                    <Link to={"#"}>
                        <img src={CART_IMG} className={styles.logo} alt="Stuff" />
                    </Link>
                    <p>name</p>
                    <p>price</p>
                </div>
            </div>

            
        </section>
    </div>
}

export default Collection


{/* <div className={styles.dropdown}>
                    <Link to={"/collection"} className={styles.dropbtn}>
                        КОЛЛЕКЦИЯ
                        <i className='bx bx-caret-down' ></i>
                    </Link>
                    <div className={styles.dropdown_content}>
                        <div className={styles.dropdown_content_column}>
                            <p>КОЛЛЕКЦИИ</p>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div> */}