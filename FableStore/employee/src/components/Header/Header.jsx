import React from "react";

import styles from '../../styles/Header.module.css';
import LOGO from "../../img/logo_fable.svg"

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const Header = () => {
    const setActive = ({isActive})=>(isActive? styles.active : "")

    return(
        <header className={styles.header}>
            <section className={styles.section}>
                <NavLink to={"/"} className={setActive}>
                    <img src={LOGO} className={styles.logo} alt="Stuff" />
                </NavLink>
            </section>


            <section className={styles.section}>
                <div>
                    <NavLink to={"/constructor"} className={setActive}>
                        КОНСТРУКТОР
                    </NavLink>
                </div>      
                <div className={styles.dropdown}>
                    <NavLink to={"/collection"} className={setActive}>
                        КОЛЛЕКЦИЯ
                        <i className='bx bx-caret-down' ></i>
                    </NavLink>
                    <div className={styles.dropdown_content}>
                        <div className={styles.dropdown_content_column}>
                            <p>КОЛЛЕКЦИИ</p>
                            <Link to={"/collection/?collection=Fable of Klassik"} className={setActive}>
                                KLASSIK
                            </Link>
                            <Link to={"/collection/?collection=Fable of colors"} className={setActive}>
                                colors
                            </Link>
                        </div>
                        <div className={styles.dropdown_content_column}>
                            <p>ОДЕЖДА</p>
                            <Link to={"/collection/?category=Shorts"} className={setActive}>
                                Shorts
                            </Link>
                            <Link to={"/collection/?category=Jacket"} className={setActive}>
                                Jacket
                            </Link>
                            <Link to={"/collection/?category=Jeans"} className={setActive}>
                                Jeans
                            </Link>
                        </div>
                        <div className={styles.dropdown_content_column}>
                            <p>АКСЕССУАРЫ</p>
                            {/* <a href="#">Link 1</a>
                            <a href="#">Link 2</a> */}
                        </div>
                        
                    </div>
                </div>

                <div>
                    <NavLink to={"/sale"} className={setActive}>
                        SALE
                    </NavLink>
                </div>
            </section>


            <section className={styles.section}>
                <NavLink to={"/cart"} className={setActive}>
                    КОРЗИНА
                </NavLink>
                <NavLink to={"/login"} className={setActive}>
                    АККАУНТ
                </NavLink>
            </section>
        </header>
    );
};

export default Header;

