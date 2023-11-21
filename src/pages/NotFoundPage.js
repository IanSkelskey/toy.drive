import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

export default function NotFoundPage() {
    return (
        <AnimatedPage>
            <section className="content-section">
                <h2>Page Not Found</h2>
                <p>
                    Oops! The page you are looking for does not exist. It might have been moved or deleted.
                </p>
                <p>
                    <a href="/">Go back to the homepage</a>
                </p>
            </section>
        </AnimatedPage>
    );
}
