import React from 'react';
import { useState, useEffect } from 'react';
import './navbar.css';
import scrollToTopIcon from './jet.jpg';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@phosphor-icons/react';
// import jet from './// Import your scroll to top icon

export const Navbar = () => {

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    // Add event listener to check scroll position
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Show or hide scroll-to-top icon based on scroll position
    if (window.pageYOffset > 100) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scroll to top
    });
  };

  return (
    <div className='navbar'>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/"> </Link>
        <Link to="cart">
          <ShoppingCart size={32}/>
        </Link>
        {showScrollToTop && (
        <img
          src={scrollToTopIcon}
          alt="Scroll to Top"
          className="scroll-to-top-icon"
          onClick={handleScrollToTop} // Attach onClick event handler
        />
        )}
     
      </div>
    </div>
  );
};
