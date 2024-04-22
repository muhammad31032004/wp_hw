document.addEventListener("DOMContentLoaded", function() {
    
});

var image = document.getElementById('histls');


image.addEventListener('mouseenter', function() {
    image.style.transform = 'scale(1.1)';
});


image.addEventListener('mouseleave', function() {
    image.style.transform = 'scale(1)';
});