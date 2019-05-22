/**
 * Путь к первой иконке 
 *
 * @const {string}
 */
const PATH1 = "icon.png";
/**
 * Путь ко второй иконке 
 *
 * @const {string}
 */
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
