import React from "react";


/**
 * General component used for the overall style and feel of the website. Any view across the app
 * should have layout as it's highest component to mimic a consistent design across the app.
 */
const Layout = ({children}) => (
  <div>
    {children}
  </div>
);


export default Layout;