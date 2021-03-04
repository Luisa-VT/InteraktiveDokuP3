$(function () {
  let scroll = $(".main").onepage_scroll({
    sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 700, // AnimationTime let you define how long each section takes to animate
    pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
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
  document.getElementById("Armband").play();
}
function changeImageBauchtasche() {
  document.getElementById("imgClick").src = "img/bauchtasche.png";
  document.getElementById("WearableTop").innerHTML = "Bauchtasche";
  document.getElementById("WearableText1").innerHTML =
    "Bei unserem Prototypen haben wir uns für das Wearable “Bauchtasche entschieden”.";
  document.getElementById("WearableText2").innerHTML =
    "So konnten wir die Vibrationsmotoren gut am Körper verteilen und gleichzeitig die Technik in der Tasche verstauen, damit das Gerät tragbar ist. Alternativ wäre dies auch als Gürtel möglich.";
  setTimeout(playBauchtasche, 5000);
}
function playBauchtasche() {
  document.getElementById("Bauchtasche").play();
}

function changeImageFussband() {
  document.getElementById("imgClick").src = "img/fußband.png";
  document.getElementById("WearableTop").innerHTML = "Fußband";
  document.getElementById("WearableText1").innerHTML =
    "Sehr unauffällig wäre ein Fußband, dass unter dem Hosenbein oder den Socken verschwindet.";
  document.getElementById("WearableText2").innerHTML = "";
  document.getElementById("Fussband").play();
}
function changeImageSchuhe() {
  document.getElementById("imgClick").src = "img/schuhe.png";
  document.getElementById("WearableTop").innerHTML = "Schuhe";
  document.getElementById("WearableText1").innerHTML =
    "Eine Möglichkeit wäre ein Schuh mit einer agilen Sohle, welche sich an den Boden anpasst, und so eine Leitlinie über Vibration darstellen kann.";
  document.getElementById("WearableText2").innerHTML = "";
  document.getElementById("Schuhe").play();
}
function changeImageWeste() {
  document.getElementById("imgClick").src = "img/weste.png";
  document.getElementById("WearableTop").innerHTML = "Weste";
  document.getElementById("WearableText1").innerHTML =
    "Vor allem für komplexere Vibrationsmuster, die über mehr Körperfläche verteilt werden müssten, ist eine Weste zum Unterziehen eine gute Möglichkeit.";
  document.getElementById("WearableText2").innerHTML = "";
  document.getElementById("Weste").play();
}
function goback() {
  document.getElementById("imgClick").src = "img/mike.png";
  document.getElementById("WearableTop").innerHTML = "Beschreibung";
  document.getElementById("WearableText1").innerHTML =
    "In Zukunft können wir uns Vorstellen, dass Mike verschiendenste Wearables zum Reisen und beim Navigieren durch den Bahnhof benutzen könnte.";
  document.getElementById("WearableText2").innerHTML =
    "Klicke auf verschiedene Stellen auf dem Bild, um zu sehen, wie wir uns mögliche anwendungsfälle Vorstellen können.";
}
//Prototyp
function Prototypback() {
  document.getElementById("imgPrototyp").src = "img/Bauchtasche_novib.png";
}
function changeImageLinks() {
  document.getElementById("imgPrototyp").src = "img/Bauchtasche_vib_links.png";
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
  setTimeout(Prototypback, 700);
}
function falsch() {
  document.getElementById("imgPrototyp").src = "img/Bauchtasche_vib.png";
  document.getElementById("vibvib").play();
  setTimeout(Prototypback, 1700);
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

let kontextaudio = false;
function kontext() {
  if (kontextaudio == true) {
    document.getElementById("play-kontext").src = "img/play.png";
    document.getElementById("KONTEXT").pause();
    kontextaudio = false;
  } else {
    document.getElementById("play-kontext").src = "img/pause.png";
    document.getElementById("KONTEXT").play();
    kontextaudio = true;
  }
}

let audio0 = false;
function einleitung() {
  if (audio0 == true) {
    document.getElementById("play-img0").src = "img/play.png";
    document.getElementById("EinleitungOHNE").pause();
    audio0 = false;
  } else {
    document.getElementById("play-img0").src = "img/pause.png";
    document.getElementById("EinleitungOHNE").play();
    audio0 = true;
  }
}
let audio1 = false;
function ohne1() {
  if (audio1 == true) {
    document.getElementById("play-img1").src = "img/play.png";
    document.getElementById("1OHNE").pause();
    audio1 = false;
  } else {
    document.getElementById("play-img1").src = "img/pause.png";
    document.getElementById("1OHNE").play();
    audio1 = true;
  }
}

let audio2 = false;
function ohne2() {
  if (audio2 == true) {
    document.getElementById("play-img2").src = "img/play.png";
    document.getElementById("2OHNE").pause();
    audio2 = false;
  } else {
    document.getElementById("play-img2").src = "img/pause.png";
    document.getElementById("2OHNE").play();
    audio2 = true;
  }
}
let audio3 = false;
function ohne3() {
  if (audio3 == true) {
    document.getElementById("play-img3").src = "img/play.png";
    document.getElementById("3OHNE").pause();
    audio3 = false;
  } else {
    document.getElementById("play-img3").src = "img/pause.png";
    document.getElementById("3OHNE").play();
    audio3 = true;
  }
}
let audio4 = false;
function ohne4() {
  if (audio4 == true) {
    document.getElementById("play-img4").src = "img/play.png";
    document.getElementById("4OHNE").pause();
    audio4 = false;
  } else {
    document.getElementById("play-img4").src = "img/pause.png";
    document.getElementById("4OHNE").play();
    audio4 = true;
  }
}
let audio5 = false;
function ohne5() {
  if (audio5 == true) {
    document.getElementById("play-img5").src = "img/play.png";
    document.getElementById("5OHNE").pause();
    audio5 = false;
  } else {
    document.getElementById("play-img5").src = "img/pause.png";
    document.getElementById("5OHNE").play();
    audio5 = true;
  }
}

let audiomit0 = false;
function einleitungmit() {
  if (audiomit0 == true) {
    document.getElementById("play-mit0").src = "img/play.png";
    document.getElementById("EinleitungMIT").pause();
    audiomit0 = false;
  } else {
    document.getElementById("play-mit0").src = "img/pause.png";
    document.getElementById("EinleitungMIT").play();
    audiomit0 = true;
  }
}

let audiomit1 = false;
function mit1() {
  if (audiomit1 == true) {
    document.getElementById("play-mit1").src = "img/play.png";
    document.getElementById("MIT1").pause();
    audiomit1 = false;
  } else {
    document.getElementById("play-mit1").src = "img/pause.png";
    document.getElementById("MIT1").play();
    audiomit1 = true;
  }
}

let audiomit2 = false;
function mit2() {
  if (audiomit2 == true) {
    document.getElementById("play-mit2").src = "img/play.png";
    document.getElementById("MIT2").pause();
    audiomit2 = false;
  } else {
    document.getElementById("play-mit2").src = "img/pause.png";
    document.getElementById("MIT2").play();
    audiomit2 = true;
  }
}

let audiomit3 = false;
function mit3() {
  if (audiomit3 == true) {
    document.getElementById("play-mit3").src = "img/play.png";
    document.getElementById("MIT3").pause();
    audiomit3 = false;
  } else {
    document.getElementById("play-mit3").src = "img/pause.png";
    document.getElementById("MIT3").play();
    audiomit3 = true;
  }
}

let audiomit4 = false;
function mit4() {
  if (audiomit4 == true) {
    document.getElementById("play-mit4").src = "img/play.png";
    document.getElementById("MIT4").pause();
    audiomit4 = false;
  } else {
    document.getElementById("play-mit4").src = "img/pause.png";
    document.getElementById("MIT4").play();
    audiomit4 = true;
  }
}
//

let audiomit5 = false;
function mit5() {
  if (audiomit5 == true) {
    document.getElementById("play-mit5").src = "img/play.png";
    document.getElementById("MIT5").pause();
    audiomit5 = false;
  } else {
    document.getElementById("play-mit5").src = "img/pause.png";
    document.getElementById("MIT5").play();
    audiomit5 = true;
  }
}

let ausblickaudio = false;
function Ausblick() {
  if (ausblickaudio == true) {
    document.getElementById("play-ausblick").src = "img/play.png";
    document.getElementById("AUSBLICK").pause();
    ausblickaudio = false;
  } else {
    document.getElementById("play-ausblick").src = "img/pause.png";
    document.getElementById("AUSBLICK").play();
    ausblickaudio = true;
  }
}

let prototypaudio = false;
function prototyp() {
  if (prototypaudio == true) {
    document.getElementById("play-prototyp").src = "img/play.png";
    document.getElementById("PROTOTYP").pause();
    prototypaudio = false;
  } else {
    document.getElementById("play-prototyp").src = "img/pause.png";
    document.getElementById("PROTOTYP").play();
    prototypaudio = true;
  }
}

let formgebungaudio = false;
function formgebung() {
  if (formgebungaudio == true) {
    document.getElementById("play-formgebung").src = "img/play.png";
    if (document.getElementById("WearableTop").innerHTML == "Beschreibung") {
      document.getElementById("FORMGEBUNG").pause();
    } else if (document.getElementById("WearableTop").innerHTML == "Weste") {
      document.getElementById("WESTE").pause();
    } else if (
      document.getElementById("WearableTop").innerHTML == "Armbänder"
    ) {
      document.getElementById("ARMBAND").pause();
    } else if (
      document.getElementById("WearableTop").innerHTML == "Bauchtasche"
    ) {
      document.getElementById("BAUCHTASCHE").pause();
    } else if (document.getElementById("WearableTop").innerHTML == "Fußband") {
      document.getElementById("FUßBAND").pause();
    } else if (document.getElementById("WearableTop").innerHTML == "Schuhe") {
      document.getElementById("SCHUH").pause();
    }
    formgebungaudio = false;
  } else {
    if (document.getElementById("WearableTop").innerHTML == "Beschreibung") {
      document.getElementById("FORMGEBUNG").play();
    } else if (document.getElementById("WearableTop").innerHTML == "Weste") {
      document.getElementById("WESTE").play();
    } else if (
      document.getElementById("WearableTop").innerHTML == "Armbänder"
    ) {
      document.getElementById("ARMBAND").play();
    } else if (
      document.getElementById("WearableTop").innerHTML == "Bauchtasche"
    ) {
      document.getElementById("BAUCHTASCHE").play();
    } else if (document.getElementById("WearableTop").innerHTML == "Fußband") {
      document.getElementById("FUßBAND").play();
    } else if (document.getElementById("WearableTop").innerHTML == "Schuhe") {
      document.getElementById("SCHUH").play();
    }
    document.getElementById("play-formgebung").src = "img/pause.png";
    formgebungaudio = true;
  }
}

let zielgruppeaudio = false;
function zielgruppe() {
  if (zielgruppeaudio == true) {
    document.getElementById("play-zielgruppe").src = "img/play.png";
    document.getElementById("ZIELGRUPPE").pause();
    zielgruppeaudio = false;
  } else {
    document.getElementById("play-zielgruppe").src = "img/pause.png";
    document.getElementById("ZIELGRUPPE").play();
    zielgruppeaudio = true;
  }
}
