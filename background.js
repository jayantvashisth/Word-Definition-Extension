chrome.runtime.onMessage.addListener(receiver);
window.meaning = "";
window.word="";
function receiver(exactText, sender, sendResponse) {
    console.log(exactText);
    word=exactText;
    let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + exactText;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            meaning = data[0].meanings[0].definitions[0].definition;
            console.log(meaning);
            // chrome.runtime.sendMessage(meaning);


        })
}