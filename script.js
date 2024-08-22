document.getElementById('privacy-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('privacy-modal').style.display = "block";
});

document.getElementById('footer-privacy-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('privacy-modal').style.display = "block";
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('privacy-modal').style.display = "none";
});

window.onclick = function(event) {
    if (event.target == document.getElementById('privacy-modal')) {
        document.getElementById('privacy-modal').style.display = "none";
    }
}

window.addEventListener('scroll', function() {
    const stickyFooter = document.getElementById('sticky-footer');
    const formContainer = document.querySelector('.form-container');
    const formRect = formContainer.getBoundingClientRect();
    
    if (formRect.top <= window.innerHeight && formRect.bottom >= 0) {
        stickyFooter.style.bottom = '-100px';
    } else {
        stickyFooter.style.bottom = '0';
    }
});
