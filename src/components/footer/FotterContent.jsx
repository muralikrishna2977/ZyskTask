import React from "react";
import "./FotterContent.scss";

const footerMenuArray = [
    ['Product', 'Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases'],
    ['Company', 'About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'],
    ['Resources', 'Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support'],
    ['Use cases', 'Startups', 'Enterprise', 'Government', 'SaaS centre', 'Marketplaces', 'Ecommerce'],
    ['Social', 'Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribbble'],
    ['Legal', 'Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact'],
];

function FotterContent() {
  return (
    <div className="fotter_content">
        {
            footerMenuArray.map((arr) => 
                <div className="single_menu">
                    {arr.map((str) => 
                    <button>{str}</button>)}
                </div>
            )
        }
    </div>
  );
}

export default FotterContent; 