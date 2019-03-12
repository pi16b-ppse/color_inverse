var css = 'html {background-color: #fff;' + '-webkit-filter: invert(0%);' + 'filter: invert(0%); }';
var style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
document.documentElement.appendChild(style);