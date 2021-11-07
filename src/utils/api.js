const baseUrl = "https://neocovid.herokuapp.com/api/v0";
const patientsEndpoint = "/patients";

export function getPatients() {
  return fetch(baseUrl + patientsEndpoint)
    .then((res) => res.json())
    .then((patients) => {
      return patients;
    });
}
