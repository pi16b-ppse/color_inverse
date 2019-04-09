chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {
        file: "sc.js"
    });
});
chrome.extension.onMessage.addListener(function(request){
    if (request == '1')
        chrome.browserAction.setIcon({path: "icon2.png"});
    else
        chrome.browserAction.setIcon({path: "icon.png"});
});