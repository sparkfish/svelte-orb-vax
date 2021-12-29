export default async function request(url) {
  let response = await fetch(url);
  if (response.ok) { // if HTTP-status is 200-299
    // get the response body
    let json = await response.json();
    return json;
  } else {
    alert("HTTP-Error: " + response.status);
  }
}
