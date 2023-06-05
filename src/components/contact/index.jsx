import React from 'react';

import Section from '../shared/section';
import ContactInfo from './contact-info';
import Form from './form';

import './style.scss';

const Contact = () => {
    return (
        <Section id="contact" title="Alguma pergunta? Sinta-se à vontade para contactar." background="light">
            <div className="contact-content-wrapper">
                <ContactInfo />
                <Form />
            </div>
        </Section>
    );
}

export default Contact;
