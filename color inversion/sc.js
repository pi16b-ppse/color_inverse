var css = 'html {background-color: #f00;' + '-webkit-filter: invert(100%);' + 'filter: invert(100%); }';	
var css2 = 'html {background-color: #fff;' + '-webkit-filter: invert(0%);' + 'filter: invert(0%); }';
var style = document.createElement('style');
var el = document.getElementsByTagName("style");

style.type = 'text/css';
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    if (el[el.length - 1].id === '1') {	
        style.id = '0';	
        style.appendChild(document.createTextNode(css2));		
    } else {	
        style.id = '1';		
        style.appendChild(document.createTextNode(css));	
    }
}
document.documentElement.appendChild(style);