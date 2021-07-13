// set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// close links and scroll links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const scrollLinks = document.querySelectorAll('.scroll-link');

navToggle.addEventListener('click', function() {
    linksContainer.classList.toggle('show-links');
})

scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        linksContainer.classList.remove('show-links');
    })
})

// fixed navbar and top link
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    }
    else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    }
    else {
        topLink.classList.remove('show-link');
    }
})