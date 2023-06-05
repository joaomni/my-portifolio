import React, { useState } from 'react';

import { CgMenuRight } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';

import logo from '../../../images/logo.png';
import CallToAction from '../../shared/CallToAction';
import { scrollToSection } from '../../utils/helpers';

import './style.scss';

const Navigation = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const menuItemClickHandler = (section) => {
        setMobileMenu(!mobileMenu);
        scrollToSection(section);
    };

    return (
        <div className='top-navigation-bar'>
            <div className="app-logo">
                <img src={logo} alt="nav" />
            </div>
            <div className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? (
                    <IoMdClose size={24} color="#fff" />
                ) : (
                    <CgMenuRight size={24} color="#fff" />
                )}
            </div>
            <div className={`navigation ${mobileMenu ? 'active' : ''}`}>
                <span className="navigation-item" onClick={() => menuItemClickHandler("skills")}>Habilidades</span>
                <span className="navigation-item" onClick={() => menuItemClickHandler("portfolio")}>Portfólio</span>
                <span className="navigation-item" onClick={() => menuItemClickHandler("blogs")}>Blogs & Artigos</span>
                <CallToAction text="Entrar em Contato" action={() => menuItemClickHandler("contact")} />
            </div>
        </div>
    );
}

export default Navigation;
