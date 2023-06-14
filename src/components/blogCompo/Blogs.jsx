import React, { useState, useEffect } from 'react'
import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'

import { blogData } from '../../data/blogData'

import './blogs.scss'
const Blogs = () => {
  const [blog, setBlog] = useState([])
  useEffect(() => {
    setBlog(blogData)
  }, [])
  
  return (
    <section
      aria-label="blog section"
      className="section-blog blog-home-section section__padding"
    >
      <div aria-label="blog header" className="blog-header">
        <h2 aria-label="my latest article">Статьи</h2>
        <p className="blog__description switch__color">
          Здесь будет интересно! Читайте!
        </p>
        <span></span>
      </div>

      <Reveal left>
        <div className="fake-big">Бложек</div>
      </Reveal>

      <div className="blog-wrapper blog-home-wrapper">
        {blog.slice(0, 6).map((blogsPost) => {
          const { _id, title, brief, url } = blogsPost
          return (
            <Fade bottom key={_id}>
              <article className="article-section-home">
                <div className="article-description">
                  <a href={url}>
                    <h2 aria-label={title}>{title}</h2>
                  </a>
                  <p>{brief.substring(0, 150)}...</p>
                  <a className="switch__color" href={url}>
                    Читать дальше...
                  </a>
                </div>
              </article>
            </Fade>
          )
        })}
      </div>
    </section>
  )
}

export default Blogs
