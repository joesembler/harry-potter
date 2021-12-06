

document.addEventListener("DOMContentLoaded", function() {

    
    // const mainDisplay = document.getElementById("main-display");

    fetch("http://hp-api.herokuapp.com/api/characters")
        .then(resp => resp.json())
        .then(data => {
            displayCharacter(data);
        })
})


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function displayCharacter(data) {
    const mainImage = document.getElementById('main-image');
    const randomInt = getRandomInt(25);
    const character = data[randomInt];
    const characterName = document.querySelector('#main-display h3');
    const characterHouse = document.getElementById('house');
    const characterAncestry = document.getElementById('ancestry');
    const mainList = document.querySelector('#main-display ul');

            

    mainImage.src = character.image;
            
            
    characterName.innerHTML = character.name;
            
    characterHouse.innerHTML = "House: " + character.house;
    characterAncestry.innerHTML = "Ancestry: " + character.ancestry;
}