import React from 'react';

import './header.styles.css'

const Header = () => {
    return (<div className='header '>
        {/* <img className='icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Small-dark-green-circle.svg/768px-Small-dark-green-circle.svg.png"></img> */}
        <div className='header-wrap my-auto mx-auto'>
            <h2>Subscription</h2>
            <p>To keep using this account after the trial ends set up a subscription</p>
        </div>
        </div>)
}

export default Header;