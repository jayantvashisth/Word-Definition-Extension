// chrome.runtime.onMessage.addListener(gotMessage);


console.log("hello,how are you");


console.log("hey its me jayant");
document.addEventListener('mouseup', event => {
    if (window.getSelection().toString().length) {
        var exactText = window.getSelection().toString();
        console.log(exactText);
        chrome.runtime.sendMessage(exactText);

    }
})
        // console.log(exactText);






