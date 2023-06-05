import React from 'react';
import { BsAwardFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

import hand from "../../../images/hand.png";
import girl from "../../../images/girl.png";

import CallToAction from '../../shared/CallToAction';

import './style.scss';
import { scrollToSection } from '../../utils/helpers';

const IntroContent = () => {
    return (
        <div className='intro-content'>
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} alt="hand" />
                            </span>
                            <span className="text">, I am</span>
                        </span>
                        <span className="big-text">João Santos</span>
                    </h1>
                    <p>
                        Sou apaixonado por programação e trabalho com marketing digital há três anos, atuando como Gestor de Marketing de Performance para empresas locais e em todo o Brasil.
                    </p>
                    <CallToAction text="Vamos Conversar" action={() => scrollToSection("contact")} />
                </div>
                <div className="right-col">
                    <img src={girl} alt="intro" />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Web Design</div>
                    </div>
                    <div className="highlights vertical">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>5+</span>
                            Anos de Experiência
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroContent;
