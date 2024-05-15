import React from "react";
import Resume from "./Subhash_Nalam_CV.pdf";

function PersonalDetails() {
  return (
    <div>
      <h2>Personal Details</h2>
      <div className="container">
        <ul>
          <li>Date of Birth: 09-07-1998</li>
          <li>Gender: Male</li>
          <li>Father Name: Appalaraju Nalam</li>
          <li>Marital Status: Unmarried</li>
          <li>Languages Known: Telugu, English</li>
          <li>Nationality: Indian</li>
        </ul>
      </div>
      <br></br>
      <a
        href={Resume}
        download="Subhash_Nalam_CV"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn">Download CV</button>
      </a>
    </div>
  );
}

export default PersonalDetails;
