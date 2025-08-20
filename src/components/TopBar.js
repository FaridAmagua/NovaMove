import React from 'react';

/**
 * TopBar component
 * Renders the slim coloured bar at the very top of the page containing
 * the telephone number and email address. This component helps to
 * reinforce contact information and matches the original website's
 * distinctive coloured strip.
 */
const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container topbar-content">
        <span>
          <i className="fas fa-phone-alt" aria-hidden="true"></i>{' '}
          {/* +34 658 45 05 78 */}
        </span>
        <span>
          <i className="fas fa-envelope" aria-hidden="true"></i>{' '}
           novamovespain@gmail.com
        </span>
      </div>
    </div>
  );
};

export default TopBar;