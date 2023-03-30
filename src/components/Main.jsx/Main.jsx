import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Main = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('generated.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <h2>Main Content</h2>
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
            }
        </div>
    );
};

export default Main;