import React from 'react';

import Section from '../shared/section';
import BlogCard from './blog-card';
import blog1 from '../../images/blogs/blog-thumb-1.jpg';
import blog2 from '../../images/blogs/blog-thumb-2.jpg';
import blog3 from '../../images/blogs/blog-thumb-3.jpg';

import './style.scss';

const Blogs = () => {
    return (
        <Section id="blogs" title="Blogs & Artigos" background="dark">
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="João Santos"
                    date="mar 25, 2023"
                    image={blog1}
                    title="Nômade Digital"
                    description="Neste artigo, compartilharei minha vivência como profissional, destacando os desafios e as conquistas."
                    action={() => {window.open('https://dev.to/joaomni/nomade-digital-minha-jornada-como-programador-web-e-gestor-de-trafego-464c', '_blank')}}
                />
                <BlogCard
                    user="João Santos"
                    date="mar 25, 2023"
                    image={blog2}
                    title="Campanha para Negócio Local"
                    description="No atual cenário de negócios, é essencial para as empresas locais adotarem estratégias eficazes de marketing para se destacarem em um mercado cada vez mais competitivo."
                    action={() => {window.open('https://dev.to/joaomni/campanha-para-negocio-local-dominando-sua-regiao-com-meta-ads-2cpf', '_blank')}}
                />
                <BlogCard
                    user="João Santos"
                    date="mar 25, 2023"
                    image={blog3}
                    title="SEO vs SEM"
                    description="Neste artigo, vamos explorar essas diferenças e ajudar até mesmo pessoas leigas a compreenderem esses conceitos fundamentais."
                    action={() => {window.open('https://dev.to/joaomni/seo-vs-sem-o-guia-definitivo-para-entender-as-diferencas-56na', '_blank')}}
                />
            </div>
        </Section>
    );
}

export default Blogs;
