const container = document.getElementById("numbers");

const colors = [
"#FF5733", // red-orange
"#33FF57", // green
"#3357FF", // blue
"#FF33A8", // pink
"#33FFF3", // cyan
"#F3FF33", // yellow
"#FF8C33", // orange
"#8C33FF", // purple
"#33FF8C", // mint
"#FF3333", // red
"#33A1FF", // sky blue
"#A833FF", // violet
"#FF3380", // rose
"#33FFD5", // aqua
"#FFD133", // gold
"#FF6F61", // coral
"#6BFF33", // lime
"#FF33F6", // magenta
"#33FFBD", // teal
"#3D3DFF"  // deep blue
];

let previous = null;

for(let i=1;i<=20;i++){

let div = document.createElement("div");

div.classList.add("number");

div.innerText = i;

div.addEventListener("click",function(){

if(previous){
previous.style.background = "white";
previous.classList.remove("active");
}

div.style.background = colors[i-1];
div.classList.add("active");

document.body.style.background = colors[i-1];

previous = div;

});

container.appendChild(div);

}