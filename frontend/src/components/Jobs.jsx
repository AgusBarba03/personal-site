import React, { useState, useEffect } from "react";
import { db } from "../firebase.config";

const Jobs = () => {
  const [jobsList, setJobsList] = useState([]);

  const getJobs = async () => {
    const { docs } = await db.collection("jobs").get();
    const newList = docs.map((item) => {
      return { id: item.id, ...item.data() };
    });
    setJobsList(newList);
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="jobs">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Jobs</h2>
          <ul className="list-groupd mt-4">
            {jobsList.map((item, index) => {
              return (
                <li className="list-group-item" key={index}>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>  
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
