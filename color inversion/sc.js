var css = 'html {background-color: #f00;' + '-webkit-filter: invert(100%);' + 'filter: invert(100%); }';	
var style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
document.documentElement.appendChild(style);