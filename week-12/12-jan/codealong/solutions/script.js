const select = document.querySelector("select");

const confirmedElement = document.querySelector(".confirmed");
const deathsElement = document.querySelector(".deaths");
const recoveredElement = document.querySelector(".recovered");
const criticalElement = document.querySelector(".critical");

select.addEventListener("change", async (event) => {
  const chosenCountry = event.target.value;
  const url = `https://covid-19-data.p.rapidapi.com/country?name=${chosenCountry}`;

  // Download relevant data based on country chosen!!!
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "459ea5d62fmsh6411ec02bb9a765p138cacjsn81b007d6fc15",
    },
  });
  const data = await response.json();

  /* Object destructuring version (look inside the object for properties and create variables
        with those same names) */
  const { confirmed, deaths, recovered, critical, latitude, longitude } =
    data[0];

  console.log(latitude, longitude, map);

  const location = { lat: latitude, lng: longitude };
  map.panTo(location);

  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });

  confirmedElement.textContent = confirmed;
  deathsElement.textContent = deaths;
  recoveredElement.textContent = recovered;
  criticalElement.textContent = critical;

  console.log(confirmed, deaths, recovered, critical);
});

// Google API key: AIzaSyDzn6x8l5LwxutxJxnlpjjYqCvPiCgOnPw

let map = null;

// Initialize and add the map
function initMap() {
  console.log("Init map!!!");

  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
