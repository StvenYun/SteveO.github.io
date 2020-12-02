const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


// Hex Colors start with # and then a mix of 6 letters and numbers. We can randomize the items in the array after creating a constant hex with '#' then we can create a for loop that runs 6 times that grabs a random value from the array to add to the hexColor value

const btn= document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){

    let hexColor = '#';

    for(let x = 0; x < 6; x++){
        hexColor+=hex[getRandomNumber()];
    }

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor;







}
    );

    function getRandomNumber(){
        return Math.floor(Math.random()*hex.length);
    }