import React from "react";
import "./CopyRight.scss";

function CopyRight() {
  return (
    <div className="img_content_container">
      <img src={`${import.meta.env.BASE_URL}assets/zysk.svg`} />
      <p>© 2077 zysktechnologies. All rights reserved.</p>
    </div>
  );
}

export default CopyRight;