'use strict';
// MODAL STUFF
const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";
 
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
 
for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

const isVisible = "is-visible";
 
document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

// <!-- music info load function -->
window.addEventListener("load", function (event) {
    event.preventDefault();
    const url = "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=japan&api_key=a4639d1359fd1cae45a045b4b7114178&limit=3&format=json";
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var seoulTrack = data.tracks.track.map((track) => {
          return `<div>
              <ol>
              <li>Track Name: ${track.name}</li>
              <li>Track Duration: ${track.duration}</li>
              <li>Artist: ${track.artist.name}</li>
              <li>Link: ${track.url}</li>
              </ol>
              </div>`;
        });
        document.getElementById("data").innerHTML = seoulTrack;
      });
  });