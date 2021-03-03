import React, { useEffect, useState } from "react";

const PersonalInfo = () => {
  const [birth, setBirth] = useState(new Date(2003, 5, 27));
  const [date, setDate] = useState(new Date());
  const [age, setAge] = useState(0);

  useEffect(() => {
    setAge(Math.abs(new Date(date - birth).getUTCFullYear() - 1970));
  }, []);

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
