import React from "react";
import { Link } from "react-router-dom";

import styles from '../styles/Header.module.css';
import LOGO from "../img/logo_fable.svg"

const Header = () => {
    return(
        <div className={styles.header}>
            <section className={styles.section}>
                <Link to={"/"}>
                    <img src={LOGO} className={styles.logo} alt="Stuff" />
                </Link>
            </section>


            <section className={styles.section}>
                <div>
                    <Link to={"/constructor"}>
                        КОНСТРУКТОР
                    </Link>
                </div>      
                <div className={styles.dropdown}>
                    <Link to={"/catalog"} className={styles.dropbtn}>
                        КОЛЛЕКЦИЯ
                        <i class='bx bx-caret-down' ></i>
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
                        </div>
                        <div className={styles.dropdown_content_column}>
                            <p>ОДЕЖДА</p>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            <br />
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            <br />
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                         
                        </div>
                        <div className={styles.dropdown_content_column}>
                            <p>АКСЕССУАРЫ</p>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            <br />
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        
                    </div>
                </div>

                <div>
                    <Link to={"/sale"}>
                        SALE
                    </Link>
                </div>
            </section>


            <section className={styles.section}>
                <Link to={"/cart"}>
                    КОРЗИНА
                </Link>
                <Link to={"/login"}>
                    АККАУНТ
                </Link>
            </section>
        </div>
    );
};

export default Header;

