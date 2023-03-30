import React from 'react';

const SideBar = (props) => {
    return (
        <div className='bg-light p-2'>
            {
                props.blogTitle.map(title => <div className='bg-white my-4 mx-3 p-2'><h5>{title}</h5></div>)

            }
        </div>
    );
};

export default SideBar;