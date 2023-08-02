import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import { GlobalProvider } from '../context/GlobalContext';

// Styles
import '../styles/reset.css';
import '../styles/global.module.css';
import '../styles/utilities.css';

const Layout = ({ children }) => {
    return (
        <GlobalProvider>
            <Header />
            <main>{children}</main>
            {/* Safety Bar */}
            {/* ISI */}
            <Footer />
        </GlobalProvider>
    );
};
export default Layout;
