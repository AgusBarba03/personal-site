import React from "react";

const PersonalInfo = () => {
  const birth = new Date(2003, 5, 27);
  const date = new Date();
  const age = Math.abs(new Date(date - birth).getUTCFullYear() - 1970);

  return (
    <div className="personal-info">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Personal Information</h2>
          <p className="card-text">Full Name: Agustín Barbalase</p>
          <p className="card-text">Nacionality: Argentine</p>
          <p className="card-text">Age: {age}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
