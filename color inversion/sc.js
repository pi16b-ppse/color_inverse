function create_classes() {
    $("<style type='text/css'> .inv{background-color: #fff; -webkit-filter: invert(100%); filter: invert(100%); } </style>").appendTo("html");
    $("html").attr('class', 'invex');
}

if(!$("html").hasClass('invex')) {
    create_classes();
}
$("html").toggleClass('inv');
chrome.extension.sendMessage($("html").hasClass('inv'));