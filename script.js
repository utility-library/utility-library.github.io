options = {
    "cursorOuter": "disable",
    "hoverEffect": "pointer-overlay",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 30,
    "outerHeight": 30
}; 

$(function() {
    magicMouse(options);
});

function RefAnim(url) {
    var div = document.createElement("div");
    div.setAttribute("class", "transition black a1"); 
    document.body.appendChild(div);

    div = document.createElement("div");
    div.setAttribute("class", "transition blue a2"); 
    document.body.appendChild(div);

    $('.black').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        window.location.href = url
    });
}