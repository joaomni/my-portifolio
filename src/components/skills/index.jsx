import React from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';

import Section from '../shared/section';
import TechIcons from '../../images/tech-icons.png';
import CallToAction from '../shared/CallToAction';

import './style.scss';

const executeURL = (url) => {
    window.location.href = url;
};

const index = () => {
    const handleClick = () => {
        const url = "https://drive.google.com/uc?export=download&id=134ZordU8I1UDpQTPaLtWedKD0y41ZLaW";

        // Executar a URL
        executeURL(url);
    };

    return (
        <Section background="dark" id="skills">
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img src={TechIcons} alt="skills" />
                </div>
                <div className="right-col">
                    <h2>Habilidades</h2>
                    <p>
                        Sou um gestor de marketing de performance especializado em campanhas nas plataformas Google Ads e Meta Ads (Instagram e Facebook). Minha expertise em desenvolvimento web, utilizando as tecnologias mais atuais do mercado, complementa minhas habilidades de marketing digital. Com uma abordagem estratégica, crio campanhas altamente eficazes, impulsionando o alcance, engajamento e conversões para obter resultados excepcionais para o seu negócio.   
                    </p>
                    <CallToAction text="Download CV" action={handleClick} icon={<AiOutlineCloudDownload />} />
                </div>
            </div>
        </Section>
    );
}

export default index;
