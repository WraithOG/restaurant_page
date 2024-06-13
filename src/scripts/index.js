import loadPage from "./page-load.js";
import loadMenu from "./menu.js";
import loadHome from "./home.js";
import loadAbout from "./about.js";
import "../style/style.css";

loadPage();


const homeButton = document.getElementById("home");
homeButton.addEventListener("click", function(){
    const body = document.getElementById("body");
    body.remove();
    loadHome();
})

const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", function (){
    const body = document.getElementById("body");
    body.remove();
    loadMenu();
});

const aboutButton = document.getElementById("about");
aboutButton.addEventListener("click", function (){
    const body = document.getElementById("body");
    body.remove();
    loadAbout();
});

