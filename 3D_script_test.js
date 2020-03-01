var scene = document.querySelector('.scene');
var cube = document.querySelector('.cube');
var originX = 50;
var originY = 50;
var rotateX = "0";
var rotateY = "0";
var rotateZ = "0";


function perspectiveRange() {
    var perspective = document.getElementById("perspectiveoutput").value;
    document.getElementById("scene").style.perspective = perspective + 'px';
}


function updatePerspectiveOrigin() {
    var originX = document.getElementById("originxoutput").value;
    var originY = document.getElementById("originyoutput").value;
    document.getElementById("scene").style.perspectiveOrigin = originX + "% " + originY + "%";
}

function updateTransform() {
    var rotateX = document.getElementById("rotatexoutput").value;
    var rotateY = document.getElementById("rotateyoutput").value;
    var rotateZ = document.getElementById("rotatezoutput").value;
    document.getElementById("cube").style.transform = "rotateX(" + rotateX + "deg)";
    
}

function updateTransform() {
    if (document.getElementById("rotatexoutput").value !== null)
        {var rotateX = document.getElementById("rotatexoutput").value}
    if (document.getElementById("rotateyoutput").value !== null)
        {var rotateY = document.getElementById("rotateyoutput").value}
    document.getElementById("cube").style.transform = "rotateX(" + rotateX + "deg) " + "rotateY(" + rotateY + "deg)";
}

function updateTransformY() {
    var rotateY = document.getElementById("rotateyoutput").value;
    document.getElementById("cube").style.transform = "rotateY(" + rotateY + "deg)";
}