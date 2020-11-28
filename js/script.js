window.onscroll = function () {
    scrollFunction()
    scrollFunctionBtn()
};

// Awal untuk navbar
function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-500px";
    }
}
// Akhir untuk navbar

function scrollFunctionBtn() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.right = "16px";
        document.getElementById("myBtn").style.bottom = "40px";
    } else {
        document.getElementById("myBtn").style.right = "-40px";
    }
}