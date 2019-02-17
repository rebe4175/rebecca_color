"use strict";

window.addEventListener("load", init);

let colourWheel;
let primeColor;
let hslConverted;
let selectedHarmony = analogous;

let box1 = document.querySelector(".box_1");
let box2 = document.querySelector(".box_2");
let base = document.querySelector(".box_3");
let box4 = document.querySelector(".box_4");
let box5 = document.querySelector(".box_5");


function init() {

//event listeners that directs you to following functions (i.e "click", name of function)

colourWheel = document.querySelector("#colorWheel");
colorWheel.addEventListener("input", updateColor);
document.querySelector("#analogous").addEventListener("click", selectAnalogous);
document.querySelector("#monochromatic").addEventListener("click", selectMonochomatic);
document.querySelector("#triad").addEventListener("click", selectTriad);
document.querySelector("#complementary").addEventListener("click", selectComplementary);
document.querySelector("#compound").addEventListener("click", selectCompound);
document.querySelector("#shade").addEventListener("click", selectShade);


}

// selectedHarmony is set to be your base color. In this case, the selected Harmony is refering to the alagous function.
//This makes sure that whatever base you have chosen, the rest of the palette fills itself out depending on which function your refering to.

function selectAnalogous() {

  selectedHarmony = analogous;
  selectedHarmony();
}

function selectMonochomatic() {

  selectedHarmony = monochomatic;
  selectedHarmony();

}

function selectTriad() {

  selectedHarmony = triad;
  selectedHarmony();

}

function selectComplementary() {

  selectedHarmony = complementary;
  selectedHarmony();

}

function selectCompound() {

  selectedHarmony = compound;
  selectedHarmony();
}

function selectShade() {

  selectedHarmony = shade;
  selectedHarmony();
}

//makes sure the background color of the base (in this case the middle div) matches the target (whatever color you click on, on the color wheel)

function updateColor(event) {

    if (base) {
        base.style.backgroundColor = event.target.value;
        primeColor = event.target.value;
        selectedHarmony()
    } 
   
}

//converts the HEX to RGB 

function convertHEXtoRGB() {
console.log(primeColor)

//this divides the hex into parts

    let prime1 = primeColor.substring(1,3);
    let prime2 = primeColor.substring(3,5);
    let prime3 = primeColor.substring(5,7);

    console.log(prime1, prime2, prime3);

//parseInt converts the r, g and b from hexadecimal to the 10 numbered system

    let r = parseInt(prime1, 16)
    let g = parseInt(prime2, 16);
    let b = parseInt(prime3, 16)
    console.log("rgb", r, g, b);

    //returns it as r, g and b

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

  //took somewhat of a detour of parameters, and I'm in so deep that I just left it.
  //I made a variable for the hex to rgb function and the rgb to hsl function
  //in the hsl variable, I have the r g and b from parameters

  let rgb = convertHEXtoRGB();
  let hsl = convertRBGtoHSL(rgb.r, rgb.g, rgb.b);

  //I then made variables for s, h and l. This was because initially I made functions that calculated each, so I could just insert the numbers.
  //Then I found out that I could just insert h, s and l and add or substract the numbers without the calculations, so really all the calculation functions were obsolete 
  //I tried to put the h, s and l in as parameters and remove the repeating variables, but it didnt recognize the h, s and l, so I must have done something wrong somewhere.
  //I also tried to put the repeating calculations and variables in a seperate function, and to call it, but that did not work either.

  let s = hsl.s;
  let h = hsl.h;
  let l = hsl.l;

  hslConverted = {h, s, l};
    

    box1.style.backgroundColor = `hsl(${hslConverted.h - 60}, ${hslConverted.s}%, ${hslConverted.l}%)`;
    box2.style.backgroundColor = `hsl(${hslConverted.h - 30}, ${hslConverted.s}%, ${hslConverted.l}%)`;
    box4.style.backgroundColor = `hsl(${hslConverted.h + 30}, ${hslConverted.s}%, ${hslConverted.l}%)`;
    box5.style.backgroundColor = `hsl(${hslConverted.h + 60}, ${hslConverted.s}%, ${hslConverted.l}%)`;
}

function monochomatic () {

  let rgb = convertHEXtoRGB();
  let hsl = convertRBGtoHSL(rgb.r, rgb.g, rgb.b);

  let s = hsl.s;
  let h = hsl.h;
  let l = hsl.l;

  hslConverted = {h, s, l};

  box1.style.backgroundColor = `hsl(${hslConverted.h}, ${hslConverted.s}%, ${hslConverted.l + 10}%)`;
  box2.style.backgroundColor = `hsl(${hslConverted.h}, ${hslConverted.s}%, ${hslConverted.l + 40}%)`;
  box4.style.backgroundColor = `hsl(${hslConverted.h}, ${hslConverted.s}%, ${hslConverted.l + 30}%)`;
  box5.style.backgroundColor = `hsl(${hslConverted.h}, ${hslConverted.s}%, ${hslConverted.l + 20}%)`;

}

function triad() {

  let rgb = convertHEXtoRGB();
  let hsl = convertRBGtoHSL(rgb.r, rgb.g, rgb.b);

  let s = hsl.s;
  let h = hsl.h;
  let l = hsl.l;

  hslConverted = {h, s, l};

  box1.style.backgroundColor = `hsl(${hslConverted.h + 120}, ${hslConverted.s}%, ${hslConverted.l}%)`;
  box2.style.backgroundColor = `hsl(${hslConverted.h + 90}, ${hslConverted.s}%, ${hslConverted.l}%)`;
  box4.style.backgroundColor = `hsl(${hslConverted.h + 90}, ${hslConverted.s}%, ${hslConverted.l + 20}%)`;
  box5.style.backgroundColor = `hsl(${hslConverted.h + 120}, ${hslConverted.s}%, ${hslConverted.l + 20}%)`;

}

function complementary() {

  let rgb = convertHEXtoRGB();
  let hsl = convertRBGtoHSL(rgb.r, rgb.g, rgb.b);

  let s = hsl.s;
  let h = hsl.h;
  let l = hsl.l;

  hslConverted = {h, s, l};

  box1.style.backgroundColor = `hsl(${hslConverted.h + 180}, ${hslConverted.s}%, ${hslConverted.l}%)`;
  box2.style.backgroundColor = `hsl(${hslConverted.h + 140}, ${hslConverted.s}%, ${hslConverted.l}%)`;
  box4.style.backgroundColor = `hsl(${hslConverted.h + 100}, ${hslConverted.s}%, ${hslConverted.l}%)`;
  box5.style.backgroundColor = `hsl(${hslConverted.h + 60}, ${hslConverted.s}%, ${hslConverted.l}%)`;

}

function compound() {

  let rgb = convertHEXtoRGB();
  let hsl = convertRBGtoHSL(rgb.r, rgb.g, rgb.b);

  let s = hsl.s;
  let h = hsl.h;
  let l = hsl.l;

  hslConverted = {h, s, l};

  box1.style.backgroundColor = `hsl(${hslConverted.h + 180}, ${hslConverted.s}%, ${hslConverted.l}%)`;
  box2.style.backgroundColor = `hsl(${hslConverted.h + 100}, ${hslConverted.s}%, ${hslConverted.l}%)`;
  box4.style.backgroundColor = `hsl(${hslConverted.h + 40}, ${hslConverted.s}%, ${hslConverted.l}%)`;
  box5.style.backgroundColor = `hsl(${hslConverted.h + 20}, ${hslConverted.s}%, ${hslConverted.l}%)`;

}

function shade() {

  let rgb = convertHEXtoRGB();
  let hsl = convertRBGtoHSL(rgb.r, rgb.g, rgb.b);

  let s = hsl.s;
  let h = hsl.h;
  let l = hsl.l;

  hslConverted = {h, s, l};

  box1.style.backgroundColor = `hsl(${hslConverted.h}, ${hslConverted.s + 20}%, ${hslConverted.l}%)`;
  box2.style.backgroundColor = `hsl(${hslConverted.h}, ${hslConverted.s + 10}%, ${hslConverted.l}%)`;
  box4.style.backgroundColor = `hsl(${hslConverted.h}, ${hslConverted.s - 20}%, ${hslConverted.l}%)`;
  box5.style.backgroundColor = `hsl(${hslConverted.h}, ${hslConverted.s - 60}%, ${hslConverted.l}%)`;

}