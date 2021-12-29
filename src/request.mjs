// import axios from 'axios'

// export default async function request(url) {
//   await axios.get(url)
//     .then(response => {
//       return response;
//     })
//     .catch(error => {
//       if (error.response) {
// 	console.log(error.reponse.status);
//       } else {
// 	console.log(error.message);
//       }
//     })
// }
export default async function request(url) {
  let response = await fetch(url);
  if (response.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = await response.json();
    return json;
  } else {
    alert("HTTP-Error: " + response.status);
  }
}
