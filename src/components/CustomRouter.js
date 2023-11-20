import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const CustomRouter = ({ children }) => {
    // Get the basename from the window location.
    // This assumes your app is hosted at 'https://ianskelskey.github.io/toy.drive'
    const basename = document.location.pathname.split('/')[1];

    return (
        <BrowserRouter basename={`/${basename}`}>
            {children}
        </BrowserRouter>
    );
};

export default CustomRouter;
