document.addEventListener('click', () => {
    const landing = document.querySelector('.landing');
    landing.style.transition = 'opacity 0.5s';
    landing.style.opacity = 0;
    
    setTimeout(() => {
        window.location.href = 'main.html?fromLanding=1'; // add query param
    }, 500);
});