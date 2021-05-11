import React from 'react';
import Header from '../Header';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <div className="card">
        <Header/>
        {props.children}
    </div>
   )

 }

export default Layout