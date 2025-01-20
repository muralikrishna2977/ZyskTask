import React from "react";
import "./Application.scss";

const companies = [
  { src: "assets/boltshift.svg", name: "Boltshift" },
  { src: "assets/lightbox.svg", name: "Lightbox" },
  { src: "assets/featherdev.svg", name: "FeatherDev" },
  { src: "assets/spherule.svg", name: "Spherule" },
  { src: "assets/globalbank.svg", name: "GlobalBank" },
  { src: "assets/nietzsche.svg", name: "Nietzsche" },
];

function Application() {
  return (
    <div className="application">
      <p>Join 4,000+ companies already growing</p>
      <div className="companies_logos">
        {companies.map((company, index) => (
          <div className="single_logo" key={index}>
            <img src={`${import.meta.env.BASE_URL}${company.src}`} alt={company.name} />
            <p>{company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Application;
