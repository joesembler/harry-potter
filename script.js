

document.addEventListener("DOMContentLoaded", function() {

    const mainImage = document.getElementById('main-image');
    console.log(mainImage);


    fetch("http://hp-api.herokuapp.com/api/characters")
        .then(resp => resp.json())
        .then(data => {
            const randomInt = getRandomInt(291);
            console.log(data);
            console.log(data[randomInt].image);
            mainImage.src = data[randomInt].image;
            console.log(mainImage.src);
        })
})


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }