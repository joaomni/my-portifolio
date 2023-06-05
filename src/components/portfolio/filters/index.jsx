import React, { useState } from 'react';

import './style.scss';

const filtersData = [
    {
        name: "Todos",
        id: "all",
    },
    {
        name: "Produtos",
        id: "product",
    },
    {
        name: "Landind Pages",
        id: "web-page",
    },
    {
        name: "PWA",
        id: "web-app",
    },
    {
        name: "Mobile",
        id: "mobile-app",
    },
];

const Filters = ({ filterProjects }) => {
    const [active, setActive] = useState("");

    const clickHandler = (id) => {
        setActive(id);
        filterProjects(id);
    };

    return (
        <ul className='filter-menu-items'>
            {filtersData.map((item) => (
                <li 
                    key={item.id} 
                    className={`filter-menu-item ${active === item.id ? 'active' : ''}`}
                    onClick={() => clickHandler(item.id)}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
}

export default Filters;
