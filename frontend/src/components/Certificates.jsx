import React, { useState, useEffect } from "react";
import axios from "axios";
import { storage, db } from "../firebase.config";

const Certificates = () => {
  const [certificatesList, setCertificatesList] = useState([]);

  const getCertificatesList = async () => {
    const { docs } = await db.collection("certificates").get();
    const newList = docs.map((item) => {
      return { id: item.id, ...item.data() };
    });
    setCertificatesList(newList);
  };

  const downloadCertificate = async (item) => {
    const storageRef = storage.ref(item.reference);
    const URI = await storageRef.getDownloadURL();
    const metadata = await storageRef.getMetadata();
    const response = await axios.get(URI, {
      responseType: "blob",
    });
    const blob = new Blob([response.data]);
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${metadata.name}`;
    link.click();
  };

  useEffect(() => {
    getCertificatesList();
  }, []);

  return (
    <div className="certificates">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Certificates</h2>
          <ul className="list-group mt-4">
            {certificatesList.map((item, index) => {
              return (
                <li className="list-group-item" key={index}>
                  <h5 className="card-title">{item.name}</h5>
                  <button
                    className="btn btn-primary float-right"
                    onClick={() => downloadCertificate(item)}
                  >
                    Ver Certificado
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
