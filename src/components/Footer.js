import * as React from 'react';
import * as styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.footer} website-border`}>
            <div className='container'>
                <h2 className='h1'>My Footer</h2>
            </div>
        </footer>
    );
};
export default Footer;
