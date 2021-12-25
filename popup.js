let temp = document.getElementById('Word');



let bg = chrome.extension.getBackgroundPage();
console.log(bg.meaning);
console.log(bg.word);
temp.innerText = bg.word;

let def = document.createElement("p");
def.innerText = bg.meaning;
document.body.appendChild(def); 


