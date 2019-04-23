if(!$("html").hasClass('invex')) {
    $("<style type='text/css'> .inv{background-color: #fff; -webkit-filter: invert(100%); filter: invert(100%); } </style>").appendTo("html");
    $("html").attr('class', 'invex');
}
$("html").toggleClass('inv');
chrome.extension.sendMessage($("html").hasClass('inv'));