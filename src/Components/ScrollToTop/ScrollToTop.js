// ScrollToTop.js
import React, { useState, useEffect } from 'react';
import './ScrollToTop.css'; // Ensure you create this CSS file

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) { // Adjust scroll position threshold as needed
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling effect
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`scroll-to-top ${isVisible ? 'show' : ''}`}
            aria-label="Scroll to top"
        >
            &#8593; {/* Unicode up arrow character */}
        </button>
    );
};

export default ScrollToTop;
