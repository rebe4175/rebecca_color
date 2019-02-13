"use strict";

window.addEventListener("load", init);

let colourWheel;
let primeColor;
let hslConverted;

let box1 = document.querySelector(".box_1");
let box2 = document.querySelector(".box_2");
let base = document.querySelector(".box_3");
let box4 = document.querySelector(".box_4");
let box5 = document.querySelector(".box_5");


function init() {


colourWheel = document.querySelector("#colorWheel");
colorWheel.addEventListener("input", updateColor);
document.querySelector("#analogous").addEventListener("click", analogous);
document.querySelector("#monochromatic").addEventListener("click", monochomatic);
document.querySelector("#triad").addEventListener("click", triad);
document.querySelector("#complementary").addEventListener("click", complementary);
document.querySelector("#compound").addEventListener("click", compound);
document.querySelector("#shade").addEventListener("click", shade);

updateColor();

}

function updateColor(event) {

    if (base) {
        base.style.backgroundColor = event.target.value;
        primeColor = event.target.value;
    } 
   
}

function convertHEXtoRGB() {
console.log(primeColor)

    let prime1 = primeColor.substring(1,3);
    let prime2 = primeColor.substring(3,5);
    let prime3 = primeColor.substring(5,7);

    console.log(prime1, prime2, prime3);

    let r = parseInt(prime1, 16)
    let g = parseInt(prime2, 16);
    let b = parseInt(prime3, 16)
    console.log("rgb", r, g, b);

    return{r, g, b};
}

function convertRBGtoHSL(r, g, b) {

    console.log("helloWorld");

   r /= 255;
   g /= 255;
   b /= 255;
 
   let h, s, l;

   const min = Math.min(r,g,b);
   const max = Math.max(r,g,b);
  
   if( max === min ) {
     h = 0;
   } else
   if (max === r) {
     h = 60 * (0 + (g - b) / (max - min) );
   } else
   if (max === g) {
     h = 60 * (2 + (b - r) / (max - min) );
   } else
   if (max === b) {
     h = 60 * (4 + (r - g) / (max - min) );
   }
  
   if (h < 0) {h = h + 360; }
  
   l = (min + max) / 2;
  
   if (max === 0 || min === 1 ) {
     s = 0;
   } else {
     s = (max - l) / ( Math.min(l,1-l));
   }
   // multiply s and l by 100 to get the value in percent, rather than [0,1]
   s *= 100;
   l *= 100;

   console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing

   return{h, s, l};
}


function analogous () {

  let rgb = convertHEXtoRGB();
  let hsl = convertRBGtoHSL(rgb.r, rgb.g, rgb.b);

  let saturation = hsl.s;
  let hue = hsl.h;
  let lightness = hsl.l;

  hslConverted = {hue, saturation, lightness};
    //let colorString = `hsl(${hslConverted.hue}, ${hslConverted.saturation}%, ${hslConverted.lightness}%)`;
    

    box1.style.backgroundColor = `hsl(${hslConverted.hue - 60}, ${hslConverted.saturation}%, ${hslConverted.lightness}%)`;
    box2.style.backgroundColor = `hsl(${hslConverted.hue - 30}, ${hslConverted.saturation}%, ${hslConverted.lightness}%)`;
    box4.style.backgroundColor = `hsl(${hslConverted.hue + 30}, ${hslConverted.saturation}%, ${hslConverted.lightness}%)`;
    box5.style.backgroundColor = `hsl(${hslConverted.hue + 60}, ${hslConverted.saturation}%, ${hslConverted.lightness}%)`;
}

function monochomatic () {

  let rgb = convertHEXtoRGB();
  let hsl = convertRBGtoHSL(rgb.r, rgb.g, rgb.b);

  let saturation = hsl.s;
  let hue = hsl.h;
  let lightness = hsl.l;

  hslConverted = {hue, saturation, lightness};

  box1.style.backgroundColor = `hsl(${hslConverted.hue}, ${hslConverted.saturation}%, ${hslConverted.lightness + 10}%)`;
  box2.style.backgroundColor = `hsl(${hslConverted.hue}, ${hslConverted.saturation}%, ${hslConverted.lightness + 40}%)`;
  box4.style.backgroundColor = `hsl(${hslConverted.hue}, ${hslConverted.saturation}%, ${hslConverted.lightness + 30}%)`;
  box5.style.backgroundColor = `hsl(${hslConverted.hue}, ${hslConverted.saturation}%, ${hslConverted.lightness + 20}%)`;

}

function triad() {

  let rgb = convertHEXtoRGB();
  let hsl = convertRBGtoHSL(rgb.r, rgb.g, rgb.b);

  let saturation = hsl.s;
  let hue = hsl.h;
  let lightness = hsl.l;

  hslConverted = {hue, saturation, lightness};

  box1.style.backgroundColor = `hsl(${hslConverted.hue + 120}, ${hslConverted.saturation}%, ${hslConverted.lightness}%)`;
  box2.style.backgroundColor = `hsl(${hslConverted.hue + 90}, ${hslConverted.saturation}%, ${hslConverted.lightness}%)`;
  box4.style.backgroundColor = `hsl(${hslConverted.hue + 90}, ${hslConverted.saturation}%, ${hslConverted.lightness + 20}%)`;
  box5.style.backgroundColor = `hsl(${hslConverted.hue + 120}, ${hslConverted.saturation}%, ${hslConverted.lightness + 20}%)`;

}

function complementary() {

  let rgb = convertHEXtoRGB();
  let hsl = convertRBGtoHSL(rgb.r, rgb.g, rgb.b);

  let saturation = hsl.s;
  let hue = hsl.h;
  let lightness = hsl.l;

  hslConverted = {hue, saturation, lightness};

  box1.style.backgroundColor = `hsl(${hslConverted.hue + 180}, ${hslConverted.saturation}%, ${hslConverted.lightness}%)`;
  box2.style.backgroundColor = `hsl(${hslConverted.hue + 140}, ${hslConverted.saturation}%, ${hslConverted.lightness}%)`;
  box4.style.backgroundColor = `hsl(${hslConverted.hue + 100}, ${hslConverted.saturation}%, ${hslConverted.lightness}%)`;
  box5.style.backgroundColor = `hsl(${hslConverted.hue + 60}, ${hslConverted.saturation}%, ${hslConverted.lightness}%)`;

}

function compound() {

  let rgb = convertHEXtoRGB();
  let hsl = convertRBGtoHSL(rgb.r, rgb.g, rgb.b);

  let saturation = hsl.s;
  let hue = hsl.h;
  let lightness = hsl.l;

  hslConverted = {hue, saturation, lightness};

  box1.style.backgroundColor = `hsl(${hslConverted.hue + 180}, ${hslConverted.saturation}%, ${hslConverted.lightness}%)`;
  box2.style.backgroundColor = `hsl(${hslConverted.hue + 100}, ${hslConverted.saturation}%, ${hslConverted.lightness}%)`;
  box4.style.backgroundColor = `hsl(${hslConverted.hue + 40}, ${hslConverted.saturation}%, ${hslConverted.lightness}%)`;
  box5.style.backgroundColor = `hsl(${hslConverted.hue + 20}, ${hslConverted.saturation}%, ${hslConverted.lightness}%)`;

}

function shade() {

  let rgb = convertHEXtoRGB();
  let hsl = convertRBGtoHSL(rgb.r, rgb.g, rgb.b);

  let saturation = hsl.s;
  let hue = hsl.h;
  let lightness = hsl.l;

  hslConverted = {hue, saturation, lightness};

  box1.style.backgroundColor = `hsl(${hslConverted.hue}, ${hslConverted.saturation + 20}%, ${hslConverted.lightness}%)`;
  box2.style.backgroundColor = `hsl(${hslConverted.hue}, ${hslConverted.saturation + 10}%, ${hslConverted.lightness}%)`;
  box4.style.backgroundColor = `hsl(${hslConverted.hue}, ${hslConverted.saturation - 20}%, ${hslConverted.lightness}%)`;
  box5.style.backgroundColor = `hsl(${hslConverted.hue}, ${hslConverted.saturation - 60}%, ${hslConverted.lightness}%)`;

}