/***** Lizz Moraal - 22 mei 2020 - Web animatie   ********************************************/

/********************************   TEST   **************************************************/

console.log('hellow');


/*********************************************************************************************/
/********************************    SCROLL     **************************************************/
/*********************************************************************************************/
window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
       console.log('hellow');
      document.getElementById("beeld1").style.display = "inline";
      document.getElementById("origineel").style.display = "none";

    } else {
       document.getElementById("beeld1").style.display = "none";
        document.getElementById("origineel").style.display = "inline";

    }
});


window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
        document.getElementById("Hand").style.animation = "handani 3s infinite";
       document.getElementById("Vuil").style.animation = "vuilani 3s infinite";

    } else {
        document.getElementById("Hand").style.animation = "none";
       document.getElementById("Vuil").style.animation = "none";

    }
});

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 1250 || document.documentElement.scrollTop > 1250) {
       document.getElementById("man6").style.animation = "manani 3s 0s infinite";
       document.getElementById("man_66").style.animation = "manani 3s 1s infinite";
        document.getElementById("man5").style.animation = "manani 3s 1.5s infinite";
        document.getElementById("man55").style.animation = "manani 3s 2s infinite";
        document.getElementById("man555").style.animation = "manani 3s 3s infinite";
        document.getElementById("man5555").style.animation = "manani 3s 3.5s infinite";
        document.getElementById("man4_1_").style.animation = "manani 3s 4s infinite";
        document.getElementById("man3").style.animation = "manani 3s 4.5s infinite";
        document.getElementById("man22").style.animation = "manani 3s 5s infinite";
        document.getElementById("man222").style.animation = "manani 3s 5.5s infinite";
        document.getElementById("man2222").style.animation = "manani 3s 6s infinite";
        document.getElementById("man2_1_").style.animation = "manani 3s 6.5s infinite";
        document.getElementById("man1").style.animation = "manani 3s 7s infinite";
        document.getElementById("man0").style.animation = "manani 3s 7.5s infinite";
    }
    else {
        document.getElementById("man6").style.animation = "none";
       document.getElementById("man_66").style.animation = "none";
        document.getElementById("man5").style.animation = "none";
        document.getElementById("man55").style.animation = "none";
        document.getElementById("man555").style.animation = "none";
        document.getElementById("man5555").style.animation = "mnone";
        document.getElementById("man4_1_").style.animation = "none";
        document.getElementById("man3").style.animation = "none";
        document.getElementById("man22").style.animation = "none";
        document.getElementById("man222").style.animation = "none";
        document.getElementById("man2222").style.animation = "none";
        document.getElementById("man2_1_").style.animation = "none";
        document.getElementById("man1").style.animation = "none";
        document.getElementById("man0").style.animation = "none";
    }
});

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
        document.getElementById("Hand2").style.animation = "hand2 1.5s 1s infinite";
       document.getElementById("Kaas").style.animation = "hand2 1.5s 1s infinite";
    }

    else {
       document.getElementById("Hand2").style.animation = "none";
       document.getElementById("Kaas").style.animation = "none";
    }
});

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
      document.getElementById("Munten").style.animation = "manani 3s 1s infinite";
      document.getElementById("Munt").style.animation = "manani 3s 1s infinite";
        document.getElementById("Briefje").style.animation = "manani 3s 1s infinite";
        document.getElementById("Briefje2").style.animation = "manani 3s 1s infinite";
        document.getElementById("Kruis").style.animation = "manani 3s 1s infinite";
        document.getElementById("Voet").style.animation = "voet 3s 1s infinite";
    }

    else {
              document.getElementById("Munten").style.animation = "none";
      document.getElementById("Munt").style.animation = "none";
        document.getElementById("Briefje").style.animation = "none";
        document.getElementById("Briefje2").style.animation = "none";
        document.getElementById("Kruis").style.animation = "none";
        document.getElementById("Voet").style.animation = "none";
    }
});

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 2900 || document.documentElement.scrollTop > 2900) {
       document.getElementById("Persoon1").style.animation = "persoon1 1s 1s infinite";
      document.getElementById("Persoon2").style.animation = "persoon2 1s 1s infinite";
        document.getElementById("Hoofd").style.animation = "hoofd 2s 1s both infinite";
    }


    else {
       document.getElementById("Persoon1").style.animation = "none";
      document.getElementById("Persoon2").style.animation = "none";
        document.getElementById("Hoofd").style.animation = "none";
    }
});

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
        document.getElementById("Been").style.animation = "been 2s 1s infinite";
        document.getElementById("Kickball").style.animation = "kickball 2s 2s infinite";
    }

    else {
        document.getElementById("Been").style.animation = "none";
        document.getElementById("Kickball").style.animation = "none";
    }
});

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 4050 || document.documentElement.scrollTop > 4050) {
      document.getElementById("Vlag1").style.animation = "vlag 1s 1s infinite";
        document.getElementById("Vlag3").style.animation = "vlag 1s 1s infinite";
        document.getElementById("Vlag2").style.animation = "vlag2 1s 2s infinite";
        document.getElementById("Vlag4").style.animation = "vlag2 1s 2s infinite";
    }

    else {
        document.getElementById("Vlag1").style.animation = "none";
        document.getElementById("Vlag3").style.animation = "none";
        document.getElementById("Vlag2").style.animation = "none";
        document.getElementById("Vlag4").style.animation = "none";
    }
});

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 4650 || document.documentElement.scrollTop > 4650) {
        document.getElementById("Handrechts").style.animation = "handrechts 1.5s 1s infinite";
        document.getElementById("Handlinks").style.animation = "handlinks 1.5s 1s infinite";
        document.getElementById("Zeep").style.animation = "handlinks 1.5s 1s infinite";
    }

    else {
        document.getElementById("Handrechts").style.animation = "none";
        document.getElementById("Handlinks").style.animation = "none";
        document.getElementById("Zeep").style.animation = "none";
    }
});
