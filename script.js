
document.getElementById("btn").addEventListener("click", function () { 
let a = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let c = Math.floor(Math.random() * 255);
let d = Math.floor(Math.random() * 255);
let e = Math.floor(Math.random() * 255);
let f = Math.floor(Math.random() * 255);
let g = (Math.random().toFixed(1));
let h = (Math.random().toFixed(1));

document.body.style.backgroundImage = `linear-gradient(to right, rgba(${a},${b},${c},${g}), rgba(${c},${d},${e},${h}))`;
  console.log(a , g)
  document.querySelector(".color").textContent = `linear-gradient(to right, rgba(${a},${b},${c},${g}), rgba(${c},${d},${e},${h}))`;
});

