import React from 'react';
import './blog.css';
import Article from '../../components/article/Article';
import { blog1, blog2, blog3, blog4, blog5 } from './imports'

const blogData = [
  {
    imgUrl: blog1,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  }, {
    imgUrl: blog2,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  },
  {
    imgUrl: blog3,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  },
  {
    imgUrl: blog4,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  },
  {
    imgUrl: blog5,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  }
]

const Blog = () => {
  const firsBlog = blogData.pop()
  return (
    <div className='gpt3__blog section__padding' id="blog">
      <div className="gpt3__blog-heading">
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article {...firsBlog} />
        </div>
        <div className="gpt3__blog-container_groupB">
          {blogData.map((item) => <Article {...item} />)}
        </div>
      </div>
    </div>
  )
}

export default Blog;