import React from 'react';
import {Link} from "react-router-dom";

const Notfoundpage = () => {
    return (
        <div>
            <h1>Notfoundpage</h1>
            <p>Page not found. Go <Link to="">Home page</Link></p>
        </div>
    );
};

export {Notfoundpage};