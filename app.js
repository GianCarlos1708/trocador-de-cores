const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color =document.querySelector(".color");

btn.addEventListener('click',function() {
    // get random number  between 0-3
const randomnumber = getrandomnuber();
console.log(randomnumber);
document.body.style.backgroundColor = colors[randomnumber];
color.textContent = colors [randomnumber];
});

function getrandomnuber() {
return Math.floor(Math.random()* colors.length);
}
