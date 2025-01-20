import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="badge">
        <div>
          <p>New feature</p>
        </div>
        <div>
          <p>Check out the team dashboard</p>
          <img src={`${import.meta.env.BASE_URL}assets/right_arrow.svg`} />
        </div>
      </div>

      <div className="header_content">
        <p>Beautiful analytics to grow smarter</p>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="header_action">
        <div>
          <img src={`${import.meta.env.BASE_URL}assets/play_button.svg`} />
          <p>Demo</p>
        </div>
        <button>Sign up</button>
      </div>

      <img className="header_image" src={`${import.meta.env.BASE_URL}assets/header_image.png`} />
    </div>
  );
}

export default Header;
