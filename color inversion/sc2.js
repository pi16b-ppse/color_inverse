var css = 'html {-webkit-filter: invert(0%);' + 'background-color: #f00; }';	
var style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
document.body.appendChild(style);