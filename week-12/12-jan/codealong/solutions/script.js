const select = document.querySelector("select");
const mapElement = document.querySelector("#map");

const confirmedElement = document.querySelector(".confirmed");
const deathsElement = document.querySelector(".deaths");
const recoveredElement = document.querySelector(".recovered");
const criticalElement = document.querySelector(".critical");

const footerElement = document.querySelector("footer");

select.addEventListener("change", async (event) => {
  const chosenCountry = event.target.value;
  const url = `https://covid-19-data.p.rapidapi.com/country?name=${chosenCountry}`;

  // Download relevant data based on country chosen!!!
  try {
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

    confirmedElement.textContent = confirmed;
    deathsElement.textContent = deaths;
    recoveredElement.textContent = recovered;
    criticalElement.textContent = critical;

    console.log(confirmed, deaths, recovered, critical);

    const position = { lat: latitude, lng: longitude };
    updateMap(position);
  } catch (error) {
    console.log("The Covid Data could not be downloaded. TOO BAD FOR YOU");
    createErrorMessage(
      `The Covid Data for ${chosenCountry} could not be downloaded. TOO BAD FOR YOU`
    );
  }
});

function createErrorMessage(message) {
  const errorMessageElement = document.createElement("p");
  errorMessageElement.classList.add("error-message");
  errorMessageElement.textContent = message;

  footerElement.prepend(errorMessageElement);

  setTimeout(() => {
    errorMessageElement.remove();
  }, 2000);
}

function updateMap(position) {
  if (!map) {
    return;
  }
  map.panTo(position);
  marker.setPosition(position);
}

// Google API key: AIzaSyDzn6x8l5LwxutxJxnlpjjYqCvPiCgOnPw

let map = null;
let marker = null;

// Initialize and add the map
function initMap() {
  console.log("Init map!!!", map, marker);

  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  map = new google.maps.Map(mapElement, {
    zoom: 6,
    center: uluru,
  });
  // The marker, positioned at Uluru
  marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });

  mapElement.classList.add("map-loaded");
}

if (window.google) {
  console.log("Google API was loaded!!!");
  initMap();
} else {
  console.log("Google API failed to load!!!");
  createErrorMessage("The map could not be loaded");
}

/* 
1. Program starts
2. Attempt to load the Google Maps API asynchronously. If succeeded, WE will run 'initMap'
3. Setup event listener for <select>
4. If the Google Map API failed to load, show "The map could not be loaded" instead of the map
5. If the user selects a country and no map has been loaded, attempt to render statistics anyways
6. If the download of the Covid 19 data fails, show error message */
