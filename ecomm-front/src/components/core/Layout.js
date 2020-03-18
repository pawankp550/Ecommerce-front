import React from 'react'
import Navbar from '../core/Navbar';

import './css/layout.scss'

const Layout = ({ title, description, className, children}) => {
    return (
        <div >
            <Navbar />
        <div className="jumbotron">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
            <div className={className}>{children}</div>
        </div>
    </div>
    )
}

export default Layout