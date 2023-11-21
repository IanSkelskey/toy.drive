import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <AnimatedPage>
            <section className="content-section">
                <h2>Page Not Found</h2>
                <p>
                    Oops! The page you are looking for does not exist. It might
                    have been moved or deleted.
                </p>
                <p className="link">
                    <Link to="/">Return to the home page</Link>
                </p>
            </section>
        </AnimatedPage>
    );
}
