'use strict';
// <!-- music info load function -->
window.addEventListener("load", function (event) {
  event.preventDefault();
  const url = "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=france&api_key=a4639d1359fd1cae45a045b4b7114178&limit=3&format=json";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var japanTrack = data.tracks.track.map((track) => {
        return `<div>
            <ol>
            <li>Track Name: ${track.name}</li>
            <li>Track Duration: ${track.duration}</li>
            <li>Artist: ${track.artist.name}</li>
            </ol>
            </div>`;
      });
      document.getElementById("data").innerHTML = japanTrack;
    });
});
// // OPEN MODAL

// function toggleModal() {
//   const modalOverlay = document.querySelector('buttonfood');
//   modalOverlay.classList.toggle('visible');
// }

// function eventListener(imageButton) {
//   imageButton.addEventListener('click', function (event) {
//       event.preventDefault();
//   })
// }

// $('#myModal').modal('toggle')

// // CLOSE MODAL
// closeModal.addEventListener('click', toggleModal);


// HIDDEN
// function displayElement(option) {
//   const selectedItem = document.querySelector(option);
//   selectedItem.addEventListener('click', function(event) {
//       hideElements();
//       console.log(event.target.name);
//       const targetDiv = document.querySelector(`${event.target.name}`);
//       targetDiv.classList.remove('hidden');
//   })
// }

// function hideElements() {
//   const hiddenElements = document.querySelectorAll('.modal-body div');
//   hiddenElements.forEach(function (element) {
//       element.classList.add('hidden');
//   });
// }

// CLOSE MODAL
// function clearModal() {
//   const button = document.querySelector('#buttonClose');
//   buttonListener(button);
// }

// function buttonListener (button) {
//   button.addEventListener('click', function (event) {
//       const ulElemModal = document.querySelectorAll('.clearModalUponClose');
//       for (let ul of ulElemModal) {
//           while (ul.firstChild) {
//               ul.removeChild(ul.firstChild);
//           }
//       }
//       hideElements();
//   })
// }

// dropDownOptions.forEach((option) =>  {
//   displayElement(option);
// })
