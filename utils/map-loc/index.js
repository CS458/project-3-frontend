// utils/getCurrentLocation.js
function getCurrentLocation(setLocation) {
  const showPosition = (position) => {
    setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };

  const showError = (error) => {
    console.error("Error Code = " + error.code + " - " + error.message);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

export default getCurrentLocation;
