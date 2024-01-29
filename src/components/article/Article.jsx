import './article.css';

import React from 'react'

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt='blog' />
        {/* we are going to import all the images in the blog section. */}
      </div>

      <div className="gpt3__blog-container_article-content">
        <div>
        <p>{date}</p>
        <h3>{title}</h3>
        </div>

        <p>Read Full Article</p>

      </div>
    </div>
  )
}

export default Article
