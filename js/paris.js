// <!-- music info load function -->
window.addEventListener("load", function (event) {
    event.preventDefault();
    const url = "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=france&api_key=a4639d1359fd1cae45a045b4b7114178&limit=3&format=json";
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var franceTrack = data.tracks.track.map((track) => {
          return `<div>
              <ol>
              <li>Track Name: ${track.name}</li>
              <li>Track Duration: ${track.duration}</li>
              <li>Artist: ${track.artist.name}</li>
              <li>Link: ${track.url}</li>
              </ol>
              </div>`;
        });
        document.getElementById("data").innerHTML = franceTrack;
      });
  });