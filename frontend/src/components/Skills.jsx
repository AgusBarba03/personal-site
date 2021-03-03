import React, { useState, useEffect } from 'react';
import { db } from "../firebase.config";


const Skills = () => {
    const [skillsList, setSkillsList] = useState([]);

    const getSkills = async () => {
      const { docs } = await db.collection("skills").get();
      const newList = docs.map((item) => {
        return { id: item.id, ...item.data() };
      });
      setSkillsList(newList);
    };
  
    useEffect(() => {
      getSkills();
    }, []);
  
    return (
      <div className="skills">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Skills</h2>
            <ul className="list-groupd mt-4">
              {skillsList.map((item, index) => {
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
}

export default Skills;