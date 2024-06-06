import React from "react";
import './BtnComponent.css'
const BtnComponent = ({ viwUrl, textBtn }) => {
  return (
    <a href={viwUrl} target="_blank" class="btn btn-light btnProjects">
      {textBtn} <i class="bi bi-eye ms-2"></i>
    </a>
  );
};

export default BtnComponent;
