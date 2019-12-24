import React from 'react'
import Navbar from '../core/Navbar';

const Layout = ({ title, description, className, children}) => {
    return (
        <div>
            <Navbar />
        <div className="jumbotron">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
    )
}

export default Layout