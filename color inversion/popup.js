window.addEventListener('DOMContentLoaded', function() {
    var inverseColorButton = document.getElementById('inverse');
    inverseColorButton.onclick = function() {
        chrome.tabs.executeScript(null,{file: "sc.js"});
    };
    var inverseColorBackButton = document.getElementById('inverseback');
    inverseColorBackButton.onclick = function() {
        chrome.tabs.executeScript(null,{file: "sc2.js"});
    };
}, false);


