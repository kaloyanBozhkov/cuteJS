// get user geo location coords to default to on map for when no destination is selected
const getGeoLocation = (callback) => {
  if (navigator && navigator.geolocation) {
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
      .then(({ coords: { latitude: lat, longitude: lng } }) => callback({ lat, lng }))
      .catch((e) => e)
  }
}
