$(function () {
  let scroll = $(".main").onepage_scroll({
    sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 700, // AnimationTime let you define how long each section takes to animate
    pagination: false, // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function (index) {}, // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function (index) {
      setCookie("lastpage", index, 7);
    }, // This option accepts a callback function. The function will be called after the page moves.
    loop: true, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true, // You can activate the keyboard controls
    responsiveFallback: 1000, // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical", // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
  });
  var x = getCookie("lastpage");
  if (x) {
    $(".main").moveTo(x);
  }
  lightbox.option({
    resizeDuration: 200,
  });
});
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

setCookie("ppkcookie", "testcookie", 7);

function changeImageArmband() {
  document.getElementById("imgClick").src = "img/armbänder.png";
  document.getElementById("WearableTop").innerHTML = "Armbänder";
  document.getElementById("WearableText1").innerHTML =
    "Wie man es bereits von Smartwatches kennt, könnten wir GUIA auch in ein Armband implementieren.";
  document.getElementById("WearableText2").innerHTML =
    "An beiden Seiten könnten so auch klare Richtungsanweisungen gegeben werden.";
}
function changeImageBauchtasche() {
  document.getElementById("imgClick").src = "img/bauchtasche.png";
  document.getElementById("WearableTop").innerHTML = "Bauchtasche";
  document.getElementById("WearableText1").innerHTML =
    "Bei unserem Prototypen haben wir uns für das Wearable “Bauchtasche entschieden”.";
  document.getElementById("WearableText2").innerHTML =
    "So konnten wir die Vibrationsmotoren gut am Körper verteilen und gleichzeitig die Technik in der Tasche verstauen, damit das Gerät tragbar ist. Alternativ wäre dies auch als Gürtel möglich.";
}

function changeImageFussband() {
  document.getElementById("imgClick").src = "img/fußband.png";
  document.getElementById("WearableTop").innerHTML = "Fußband";
  document.getElementById("WearableText1").innerHTML =
    "Sehr unauffällig wäre ein Fußband, dass unter dem Hosenbein oder den Socken verschwindet.";
  document.getElementById("WearableText2").innerHTML =
    "";
}
function changeImageSchuhe() {
  document.getElementById("imgClick").src = "img/schuhe.png";
  document.getElementById("WearableTop").innerHTML = "Schuhe";
  document.getElementById("WearableText1").innerHTML =
    "Eine Möglichkeit wäre ein Schuh mit einer agilen Sohle, welche sich an den Boden anpasst, und so eine Leitlinie über Vibration darstellen kann.";
  document.getElementById("WearableText2").innerHTML =
    "";
}
function changeImageWeste() {
  document.getElementById("imgClick").src = "img/weste.png";
  document.getElementById("WearableTop").innerHTML = "Weste";
  document.getElementById("WearableText1").innerHTML =
    "Vor allem für komplexere Vibrationsmuster, die über mehr Körperfläche verteilt werden müssten, ist eine Weste zum Unterziehen eine gute Möglichkeit.";
  document.getElementById("WearableText2").innerHTML =
    "";
}
function goback() {
  document.getElementById("imgClick").src = "img/mike.png";
  document.getElementById("WearableTop").innerHTML = "Beschreibung";
  document.getElementById("WearableText1").innerHTML =
    "In Zukunft können wir uns Vorstellen, dass Mike verschiendenste Wearables zum Reisen und beim Navigieren durch den Bahnhof benutzen könnte.";
  document.getElementById("WearableText2").innerHTML =
    "Klicke auf verschiedene Stellen auf dem Bild, um zu sehen, wie wir uns mögliche anwendungsfälle Vorstellen können.";
}
function Prototypback() {
  document.getElementById("imgPrototyp").src = "img/Bauchtasche_novib.png";
}
function changeImageLinks() {
  document.getElementById("imgPrototyp").src =
    "img/Bauchtasche_novib_links.png";
  document.getElementById("vib").play();
}

function changeImageRechts() {
  document.getElementById("imgPrototyp").src = "img/rechts_bauchtasche.png";
  document.getElementById("vib").play();
}
function changeImageMitte() {
  document.getElementById("imgPrototyp").src = "img/mitte_bauchtasche.png";
  document.getElementById("vib").play();
}

function richtig() {
  document.getElementById("imgPrototyp").src = "img/Bauchtasche_vib.png";
  document.getElementById("vibvibvib").play();
  setTimeout(5000);
  Prototypback();
}
function falsch() {
  document.getElementById("imgPrototyp").src = "img/Bauchtasche_vib.png";
  document.getElementById("vibvib").play();
  setTimeout(5000);
  Prototypback();
}

function changeGif1() {
  document.getElementById("gif1").src = "img/shopping-cart.gif";
}

function changeGif2() {
  document.getElementById("gif2").src = "img/flying.gif";
}

function makevib() {
  document.getElementById("vib").play();
}

function changeGifs() {
  document.getElementById("gif2").src = "img/flying.svg";
  document.getElementById("gif1").src = "img/shopping-cart.svg";
}

//Audiospuren
function einleitung(){
document.getElementById("EinleitungOHNE").play();
}
function ohne1(){
  document.getElementById("1OHNE").play();
}

function ohne2(){
  document.getElementById("2OHNE").play();
}

function ohne3(){
  document.getElementById("3OHNE").play();
}
function ohne4(){
  document.getElementById("4OHNE").play();
}
function ohne5(){
  document.getElementById("5OHNE").play();
}

function einleitungmit(){
  document.getElementById("EinleitungMit").play();
  }
  function mit1(){
    document.getElementById("1MIT").play();
  }
  
  function mit2(){
    document.getElementById("2MIT").play();
  }
  
  function mit3(){
    document.getElementById("3MIT").play();
  }
  function mit4(){
    document.getElementById("4MIT").play();
  }
  function mit5(){
    document.getElementById("5MIT").play();
  }
