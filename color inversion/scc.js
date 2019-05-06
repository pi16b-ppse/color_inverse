const PATH1 = "icon.png";
const PATH2 = "icon2.png";

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file:"jquery.js"}, function() {
        chrome.tabs.executeScript(null, {file:"sc.js"});
    });
});
chrome.extension.onMessage.addListener(function(request){
    if (request == true) {
        chrome.browserAction.setIcon({path: PATH2});
    }
    else {
        chrome.browserAction.setIcon({path: PATH1});
    }
});
