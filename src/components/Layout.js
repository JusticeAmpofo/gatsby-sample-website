import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

// Styles
import '../styles/reset.css';
import '../styles/global.module.css';
import '../styles/utilities.css';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};
export default Layout;
