document.addEventListener('DOMContentLoaded', function () {
  // Load data from the JSON file using Fetch API
  fetch('pets.json')
    .then(response => response.json())
    .then(data => {
      // Display the pets information
      displayPets(data);
    })
    .catch(error => {
      console.error('Error loading data from the JSON file:', error);
    });
});

function displayPets(pets) {
  const petsContainer = document.getElementById('petsContainer');

  // Iterate through each pet and create a card to display its information
  pets.forEach(function (pet) {
    const petCard = document.createElement('div');
    petCard.classList.add('petCard');

    petCard.innerHTML = `
      <p><strong>Name:</strong> ${pet.name}</p>
      <p><strong>Age:</strong> ${pet.age} years</p>
      <p><strong>Weight:</strong> ${pet.weight} kg</p>
      <p><strong>Type:</strong> ${pet.type}</p>
      <p><strong>Likes:</strong> ${pet.likes}</p>
    `;

    petsContainer.appendChild(petCard);
  });
}
