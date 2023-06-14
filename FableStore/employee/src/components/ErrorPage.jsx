import React from "react";
import { Link } from "react-router-dom";

import styles from '../styles/Home.module.css';
import LOGO from "../img/logo_fable.svg"

const ErrorPage = () => {
    return <div className={styles.container} >
        <Link to={"/"}>
                <img src={LOGO} className={styles.logo} alt="Stuff" />
        </Link>
        <h1 className={styles.title}> *** Что-то пошло не так! ***</h1>
    </div>;
};

export default ErrorPage;