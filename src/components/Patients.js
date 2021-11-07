import React, { useEffect, useState } from "react";

import { getPatients } from "../utils/api";
import Card from "./Card";

export default function Patients() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const result = await getPatients();
    setData(result);
  }

  return <PatientsGrid patients={data}></PatientsGrid>;
}

//   {/* {data.map((patient) => (
//     <p>{patient.firstName}</p>
//   ))} */}

function PatientsGrid({ patients }) {
  return (
    <ul className="grid space-around">
      {patients.map((patient, index) => {
        const { id, firstName, lastName, entryDate, status, updated } = patient;

        return (
          <li key={id}>
            <Card
              firstName={firstName}
              lastName={lastName}
              entryDate={entryDate}
              status={status}
              updated={updated}
            ></Card>
          </li>
        );
      })}
    </ul>
  );
}
