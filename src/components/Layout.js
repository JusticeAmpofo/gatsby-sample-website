import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import Isi from './Isi';
import SafetyBar from './SafetyBar';
import { GlobalProvider } from '../context/GlobalContext';

// Styles
import '../styles/reset.css';
import '../styles/global.module.css';
import '../styles/utilities.css';

const OffSetIntoIsI = 40;

const Layout = ({ children }) => {
    return (
        <GlobalProvider>
            <Header />
            <main>{children}</main>
            <Isi />
            <Footer />
            <SafetyBar hideOffset={OffSetIntoIsI} targetId='isi' />
        </GlobalProvider>
    );
};
export default Layout;
