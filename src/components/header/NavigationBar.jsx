import React, { useState, useEffect } from "react";
import "./NavigationBar.scss";

function NavigationBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navigation_container">
      {isMobile ? (
        <div className="mobile_navbar">
          <img src={`${import.meta.env.BASE_URL}assets/zysk.svg`} />
          <img src={`${import.meta.env.BASE_URL}assets/nav_expander.svg`} />
        </div>
      ) : (
        <div className="navigation_bar">
          <div className="zysk_nav">
            <img src={`${import.meta.env.BASE_URL}assets/zysk.svg`} alt="Logo" />
            <p>Home</p>
            <div>
              <p>Products</p>
              <img src={`${import.meta.env.BASE_URL}assets/down_arrow.svg`} alt="Dropdown" />
            </div>
            <div>
              <p>Resources</p>
              <img src={`${import.meta.env.BASE_URL}assets/down_arrow.svg`} alt="Dropdown" />
            </div>
            <div>
              <p>Pricing</p>
              <img src={`${import.meta.env.BASE_URL}assets/down_arrow.svg`} alt="Dropdown" />
            </div>
          </div>
          <img src={`${import.meta.env.BASE_URL}assets/profile.svg`} alt="Profile" />
        </div>
      )}
    </div>
  );
}

export default NavigationBar;
