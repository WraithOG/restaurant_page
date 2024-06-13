import loadPage from "./page-load.js";
import loadMenu from "./menu.js";
import loadHome from "./home.js";

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

