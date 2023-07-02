const images = [];
images[0] = 'images/img1.jpg'
images[1] = 'images/img2.jpg'
images[2] = 'images/img3.jpg'
images[3] = 'images/img4.jpg'

window.onload = function () {
    const random = Math.floor(Math.random() * images.length);
    document.getElementById("container1").style.backgroundImage = `url(${images[random]})`;
    var button1 = document.getElementById("button1").style.backgroundColor = "#032541"
    var button1 = document.getElementById("button1").style.color = "white"

}

function ButtonColour1() {
    var button1 = document.getElementById("button1").style.backgroundColor = "#032541"
    var button2 = document.getElementById("button2").style.backgroundColor = "white"
    var button1 = document.getElementById("button1").style.color = "white"
    var button2 = document.getElementById("button2").style.color = "#032541"
}
function ButtonColour2() {
    var button1 = document.getElementById("button1").style.backgroundColor = "white"
    var button2 = document.getElementById("button2").style.backgroundColor = "#032541"
    var button1 = document.getElementById("button1").style.color = "#032541"
    var button2 = document.getElementById("button2").style.color = "white"
}

