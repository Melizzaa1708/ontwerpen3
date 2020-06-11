/***** Lizz Moraal - 22 mei 2020 - Web animatie   ********************************************/

/*********************************************************************************************/
/********************************    FOTO     **************************************************/
/*********************************************************************************************/

/********************************   test   **************************************************/

console.log('hellow');

/*********************************************************************************************/
/********************************    SCROLL     **************************************************/
/*********************************************************************************************/
window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
       console.log('hellow');
      document.getElementById("beeld1").style.display = "inline";
      document.querySelector("img").style.display = "none";

    } else {
       document.getElementById("beeld1").style.display = "none";
        document.querySelector("img").style.display = "inline";

    }
});


window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
       console.log('hellow');
       document.getElementById("Hand").style.animation = "3s handani infinite";
       document.getElementById("Vuil").style.animation = "3s vuilani infinite";

    } else {
       document.getElementById("Hand").style.animation = "none";
       document.getElementById("Vuil").style.animation = "none";

    }
});

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
       document.getElementById("man6").style.animation = "3s 1s manani infinite";
       document.getElementById("man_66").style.animation = "3s 1.5s manani infinite";
        document.getElementById("man5").style.animation = "3s 2s manani infinite";
       document.getElementById("man55").style.animation = "3s 2.5s manani infinite";
        document.getElementById("man555").style.animation = "3s 3s manani infinite";
       document.getElementById("man5555").style.animation = "3s 3.5s manani infinite";
        document.getElementById("man4_1_").style.animation = "3s 4s manani infinite";
       document.getElementById("man3").style.animation = "3s 4.5s manani infinite";
        document.getElementById("man22").style.animation = "3s 5s manani infinite";
       document.getElementById("man222").style.animation = "3s 5.5s manani infinite";
        document.getElementById("man2222").style.animation = "3s 6s manani infinite";
       document.getElementById("man2_1_").style.animation = "3s 6.5s manani infinite";
        document.getElementById("man1").style.animation = "3s 7s manani infinite";
       document.getElementById("man0").style.animation = "3s 7.5s manani infinite";

    } else {
        document.getElementById("man6").style.animation = "none";
       document.getElementById("man_66").style.animation = "none";
        document.getElementById("man5").style.animation = "none";
       document.getElementById("man55").style.animation = "none";
        document.getElementById("man555").style.animation = "none";
       document.getElementById("man5555").style.animation = "none";
        document.getElementById("man4_1_").style.animation = "none";
       document.getElementById("man3").style.animation= "none";
        document.getElementById("man22").style.animation = "none";
       document.getElementById("man222").style.animation = "none";
        document.getElementById("man2222").style.animation = "none";
       document.getElementById("man2_1_").style.animation = "none";
        document.getElementById("man1").style.animation = "none";
       document.getElementById("man0").style.animation = "none";
    }
});
