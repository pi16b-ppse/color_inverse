window.addEventListener('DOMContentLoaded', function() {
    var inverseColorButton = document.getElementById('inverse');
    inverseColorButton.onclick = function() {
		chrome.tabs.executeScript(null,{file: "sc.js"});
	};
}, false);


