
window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
});

$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.main-nav').toggleClass('active')
        $('.hero-text-box').toggleClass('active')
    })
});

$("form").submit(function(){
    alert("Your message has been submitted successfully. We will get in touch with you soon.");
});