import React from 'react';

import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; 

import './style.scss';

const ContactInfo = () => {
    return (
        <div className='contact-info-box'> 
            <h4>Informações de Contato</h4>
            <p>Ficarei feliz em responder a todas as perguntas que você possa ter sobre desenvolvimento web ou marketing de conteúdo.</p>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className='text'>(13) 99140 - 2511</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className='text'>joao@sothink.com.br</span>
            </div>
        </div>
    );
}

export default ContactInfo;
