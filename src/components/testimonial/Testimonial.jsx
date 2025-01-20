import React from "react";
import "./Testimonial.scss";

function Testimonial() {
  return (
    <div className="testimonial">
        <div>
          <img src={`${import.meta.env.BASE_URL}assets/power_symbol.svg`} />
          <p>Sisyphus</p>
        </div>
        <p className="testimonial_1">
          We've been using Untitled to kick start every new project and can't
          imagine working without it.
        </p>
        <img src={`${import.meta.env.BASE_URL}assets/avatar.svg`} />
        <p className="testimonial_2">Candice Wu</p>
        <p className="testimonial_3">Product Manager, Sisyphus</p>
      </div>
  );
}

export default Testimonial;