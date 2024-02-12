const button = document.querySelector('yes-button');
const canvas = document.querySelector('confetti');

const noArray = [
    'Really?',
    'Think again!',
    'Are you sure?',
    'Please say yes',
    'Ugh. You are breaking my heart',
    'Dont you love me?',
    'I will cry',
    'This is a warning, SAY YES',
    'Jau nabola',
    'Seriously? Still no?',
    'Really?',
    'Think again!',
    'Are you sure?',
    'Please say yes',
    'Ugh. You are breaking my heart',
    'Dont you love me?',
    'I will cry',
    'This is a warning, SAY YES',
    'Jau nabola?',
    'Seriously? Still no?',
    'Really?',
    'Think again!',
    'Are you sure?',
    'Please say yes',
    'Ugh. You are breaking my heart',
    'Dont you love me?',
    'I will cry',
    'This is a warning, SAY YES',
    'Jau nabola?',
    'Seriously? Still no?',
    'Really?',
    'Think again!',
    'Are you sure?',
    'Please say yes',
    'Ugh. You are breaking my heart',
    'Dont you love me?',
    'I will cry',
    'This is a warning, SAY YES',
    'Jau nabola?',
    'Seriously? Still no?',
    'Really?',
    'Think again!',
    'Are you sure?',
    'Please say yes',
    'Ugh. You are breaking my heart',
    'Dont you love me?',
    'I will cry',
    'This is a warning, SAY YES',
    'Jau nabola?',
    'Seriously? Still no?',
    'Really?',
    'Think again!',
    'Are you sure?',
    'Please say yes',
    'Ugh. You are breaking my heart',
    'Dont you love me?',
    'I will cry',
    'This is a warning, SAY YES',
    'Jau nabola?',
    'Seriously? Still no?',
    'Really?',
    'Think again!',
    'Are you sure?',
    'Please say yes',
    'Ugh. You are breaking my heart',
    'Dont you love me?',
    'I will cry',
    'This is a warning, SAY YES',
    'Jau nabola?',
    'Seriously? Still no?',
]

var clickCount = 0;

function onClickNo() {
    clickCount++;
    document.getElementById("click").innerHTML = noArray[clickCount];
}

function onClickYes() {
    document.getElementById("click").innerHTML = "Yay! I love you";
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti()
}

document.addEventListener("DOMContentLoaded", function() {
    const pupils = document.querySelectorAll(".pupil");

    document.addEventListener("mousemove", function(e) {
        var x = e.clientX / window.innerWidth ;
        var y = e.clientY / window.innerHeight ;

        pupils.forEach(function(pupil) {
            pupil.style.transform = "translate(-50%, -50%) translate(" + x * 20 + "px, " + y * 20 + "px)";
        });
    });
});

