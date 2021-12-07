function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

document.addEventListener("DOMContentLoaded", function() {

    
    // const mainDisplay = document.getElementById("main-display");

    fetch("http://hp-api.herokuapp.com/api/characters")
        .then(resp => resp.json())
        .then(data => {
            const randomInt = getRandomInt(25);
            const character = data[randomInt];
            displayCharacter(character);
        })
})


function displayCharacter(character) {
    const mainImage = document.getElementById('main-image');
    
    
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
        const randomInt = getRandomInt(25);
        const character = data[randomInt];
        displayCharacter(character);
    })
});


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
    else {
        header.style.backgroundColor = '#FFFDD0';
        list.style.backgroundColor = '#FFFDD0';
        name.style.backgroundColor = '#FFFDD0';
    }

}

const searchButton = document.getElementById('search');
searchButton.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchInput = document.querySelector('header input');
    fetch("http://hp-api.herokuapp.com/api/characters")
    .then(resp => resp.json())
    .then(data => {
        console.log(searchInput.value);
        const character = searchCharacter(data, searchInput.value);
        console.log(character);
        
        // displayCharacter(character);
        
    })
    // // TRYING TO RESET THE PLACEHOLDER TEXT
    // const nameHeader = document.querySelector('#main-display h3');
    // if (nameHeader.innerHTML.toLowerCase() == searchInput.value.toLowerCase()){
    //     searchInput.value = "";
    // }
    // console.log(nameHeader.innerHTML.toLowerCase());
})

function searchCharacter(data, searchInput){
    let characterFound = false;
    data.forEach(character => {
        if(character.name.toLowerCase() == searchInput.toLowerCase()){
            console.log("Character Found!");
            characterFound = true;
            displayCharacter(character);
            console.log(character);
            return character;
            
        }
    });
    if(characterFound == false){
        console.log("no character found");
        return null;
    }
}

