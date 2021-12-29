let temp = document.getElementById('Word');
let bg = chrome.extension.getBackgroundPage();
let def = document.createElement("p");


console.log(bg.meaning);
console.log(bg.word);

temp.innerText = bg.word;
def.innerText = bg.meaning;
document.body.appendChild(def);
def.style.width = '90%'; 


