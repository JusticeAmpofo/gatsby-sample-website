import React, { useState } from 'react';
import './header.css';

const menuLinks = [
    {
        name: 'google.com',
        href: 'https://www.google.com',
    },
    {
        name: 'klick.com',
        href: 'https://www.klick.com',
    },
    {
        name: 'unity.com',
        href: 'https://unity.com/',
    },
];

const subTitle = 'Main nav links:';

const Header = () => {
    const [expandNav, setExpandNav] = useState(false);

    return (
        <header className='header website-border'>
            <div className='container'>
                <div className='headline-block mb8 mb0-sm'>
                    <h1 className='h1'>My Header</h1>

                    <button
                        onClick={() => setExpandNav((expandNav) => !expandNav)}
                        className={`hamburger mobile-only-block ${
                            expandNav ? 'hamburger--expand' : ''
                        }`}
                    >
                        <span className='hamburger__top'></span>
                        <span className='hamburger__middle'></span>
                        <span className='hamburger__bottom'></span>
                    </button>
                </div>

                <div className='navigation-block navigation-block--desktop desktop-only-block'>
                    <p className='mr1'>{subTitle}</p>
                    <nav>
                        <ul className='navigation-block__list-ul'>
                            {menuLinks.map((menuLink, index) => {
                                return (
                                    <li
                                        key={index}
                                        className='navigation-block__list mr1'
                                    >
                                        <a
                                            className='navigation-block__link'
                                            href={menuLink.href}
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            {menuLink.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>

                <div
                    className={`mt8 navigation-block navigation-block--mobile ${
                        expandNav ? 'mobile-only-block' : ''
                    }`}
                >
                    <p className='mb2'>{subTitle}</p>
                    <nav>
                        <ul className='navigation-block__list-ul'>
                            {menuLinks.map((menuLink, index) => {
                                return (
                                    <li
                                        key={index}
                                        className='navigation-block__list-mobile mb3'
                                    >
                                        <a
                                            className='navigation-block__link navigation-block__link--mobile'
                                            href={menuLink.href}
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            {menuLink.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
export default Header;
