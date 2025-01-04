import React from 'react';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                {/* <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li> */}
            </ul>
        </nav>
    );
};

export default Navigation;