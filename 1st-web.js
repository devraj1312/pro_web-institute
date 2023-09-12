var slideImg = document.getElementById("slideImg");

var images = new Array(
    "/images/st1.jpg",
    "/images/st2.jpg",
    "/images/st3.jpg",
    "/images/st4.jpg"
);

var len = images.length;
var i = 0;
function slider(){
    if(i>len-1){
        i=0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}

function openLoginForm(){
    document.body.classList.add("showLoginForm");
}
function closeLoginForm(){
    document.body.classList.remove("showLoginForm");
}