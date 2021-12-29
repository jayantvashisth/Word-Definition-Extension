document.addEventListener('mouseup', event => {
    if (window.getSelection().toString().length) {
        var exactText = window.getSelection().toString();
        console.log(exactText);
        chrome.runtime.sendMessage(exactText);

    }
})
        // console.log(exactText);






