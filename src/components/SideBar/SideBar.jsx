import React from 'react';
import './SideBar.css'

const SideBar = (props) => {
    return (
        <div>
            <div className=' text-center mb-4 bg-light p-2 rounded-3 '>
                <h4 className='bg-white btn-totalTime'>Spent time on read: {props.totalTime} min</h4>
            </div>
            <div className='bg-light p-2 rounded-3'>
                <h4>Bookmarked Blogs: {props.blogTitle.length}</h4>
                {
                    props.blogTitle.map(title => <div className='bg-white my-4 mx-3 p-2 rounded-3'><h5>{title}</h5></div>)
                }
            </div>
        </div>
    );
};

export default SideBar;