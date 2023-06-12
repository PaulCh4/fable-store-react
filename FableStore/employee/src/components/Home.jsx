import React from "react";
import { Link } from "react-router-dom";

import styles from '../styles/Home.module.css';
import LOGO from "../img/logo_fable.svg"
import PEOPLE from "../img/people.jpg"

const Home = () => {
    return <div className={styles.container} >
        
            <Link to={"/"}>
                    <img src={LOGO} className={styles.logo} alt="Stuff" />
            </Link>
        <h1 className={styles.title}>Московский бренд оджеды, не ограничивающий себя в рамках каких либо концепций</h1>
        <img src={PEOPLE} className={styles.people} alt="Stuff" />
    </div>;
};

export default Home;