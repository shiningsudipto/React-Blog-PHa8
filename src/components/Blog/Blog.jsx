import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import Question from '../Question/Question';

const Blog = (props) => {
    const { cover, person, name, title, publishdate, readtime } = props.blog;
    const handleBlogTitle = props.handleBlogTitle;
    const handleReadTime = props.handleReadTime;
    return (

        <div className='mx-4'>
            <div>
                <img className='img-fluid rounded rounded-3 mb-3' src={cover} alt="" />
                <div className='d-flex'>
                    <img className='blog-avatar me-3 mt-1' src={person} alt="" />
                    <div className='d-flex w-100 align-items-center justify-content-between'>
                        <div className=''>
                            <h5>{name}</h5>
                            <p><small>{publishdate}</small></p>
                        </div>
                        <p>{readtime} min read  <FontAwesomeIcon onClick={() => handleBlogTitle(title)} className='bookmark' icon={faBookmark} /></p>
                    </div>
                </div>
                <h3>{title}</h3>
                <button onClick={() => handleReadTime(readtime)} className=' p-0 btn border-0 text-decoration-underline mb-0 blog-read'>Mark as read</button>
                < hr className='my-4' />
            </div>
        </div>
    );
};

export default Blog;