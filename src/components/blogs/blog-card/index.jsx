import React from 'react';

import Arrow from '../../shared/Arrow';

import "./style.scss";

const BlogCard = ({ user, date, image, title, description, action }) => {
  return (
    <div className='blog-card'>
        <div className="image-section">
            <img src={image} alt={title} />
        </div>
        <div className="content-section">
            <div className="info-bar">
                <div className="user-name">
                    Por {user}
                </div>
                <div className="posted-date">
                    {date}
                </div>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="readmore-cta" onClick={action}>
                <span className="text">Leia mais</span>
                <Arrow />
            </div>
        </div>
    </div>
  );
}

export default BlogCard;
