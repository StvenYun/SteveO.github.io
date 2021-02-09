const colors = ["green", "red", "blue", "teal","yellow", "white", "black", "maroon", "lime", "silver","aqua", "navy", "purple", "olive" ];


const btn = document.getElementById('btn');
const color = document.querySelector(".color")


btn.addEventListener('click',function(){
// get random number between 0-3
   const randomNumber = getRandomNumber();
   console.log(randomNumber);
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);}





// const btn = document.getElementById('btn');
// const color = document.querySelector('.color');
// btn.addEventListener('click',function(){
//     // get random number between 0-3 






//     const randomNumber = 2;

//     document.body.style.backgroundColor = colors[randomNumber];
    
// })