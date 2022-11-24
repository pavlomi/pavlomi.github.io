let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btndotnet = document.getElementById("btndotnet");
let btnjava = document.getElementById("btnjava");
let btnandroid = document.getElementById("btnandroid");
let btnangular = document.getElementById("btnangular");


btndotnet.addEventListener("click", function(){
    console.log("click .Net")
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Wybrałeś/aś .Net");
        item = "1";
        tg.MainButton.show();
    }
});

btnjava.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Wybrałeś/aś Java");
        item = "1";
        tg.MainButton.show();
    }
});

btnandroid.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Wybrałeś/aś Android");
        item = "1";
        tg.MainButton.show();
    }
});

btnangular.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Wybrałeś/aś Angular");
        item = "1";
        tg.MainButton.show();
    }
});

/**
 * .....
 */


Telegram.WebApp.onEvent("mainButtonClicked", function (){
    tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);