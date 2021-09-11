window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("fixedMenu").className = "myFixedMenu-box-shadow";
    } else {
        document.getElementById("fixedMenu").className = "myFixedMenu";
    }
}