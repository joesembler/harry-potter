

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
    changeHouseColors(character.house);
}

const nextButton = document.getElementById('next-button');
nextButton.addEventListener("click", () => {
    fetch("http://hp-api.herokuapp.com/api/characters")
    .then(resp => resp.json())
    .then(data => {
        displayCharacter(data);
    })
})


function changeHouseColors(house){

    const header = document.querySelector("header");
    const name = document.querySelector('#main-display h3');
    const list = document.querySelector('#main-display ul');

    if(house.toLowerCase() == "gryffindor"){
        header.style.backgroundColor = '#AE0001';
        list.style.backgroundColor = '#EEBA30';
        name.style.backgroundColor = '#EEBA30';
    }
    else if(house.toLowerCase() == "slytherin"){
        header.style.backgroundColor = '#2A623D';
        list.style.backgroundColor = '#AAAAAA';
        name.style.backgroundColor = '#AAAAAA';
    }
    else if(house.toLowerCase() == "ravenclaw"){
        header.style.backgroundColor = '#222F5B';
        list.style.backgroundColor = '#946B2D';
        name.style.backgroundColor = '#946B2D';
    }
    else if(house.toLowerCase() == "hufflepuff"){
        header.style.backgroundColor = '#FFDB00';
        list.style.backgroundColor = '#60605C';
        name.style.backgroundColor = '#60605C';
    }

}