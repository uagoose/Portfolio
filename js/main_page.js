window.addEventListener('DOMContentLoaded', () => {
    // fade-in stuff
    const urlParams = new URLSearchParams(window.location.search);
    const fromLanding = urlParams.get('fromLanding');

    if (fromLanding === '1') {
        requestAnimationFrame(() => {
            document.body.classList.add('show');
        });
    } else {
        document.body.style.transition = 'none';
        document.body.classList.add('show');
    }

    // email copy
    const email = "goose.the.ua@gmail.com";
    const link = document.getElementById("copy-email");
    const feedback = document.getElementById("copy-feedback");

    if(link) { // safety check
        link.addEventListener("click", (e) => {
            e.preventDefault();
            navigator.clipboard.writeText(email).then(() => {
                feedback.style.opacity = "1";
                setTimeout(() => {
                    feedback.style.opacity = "0";
                }, 1500);
            }).catch(err => {
                alert("Failed to copy email. Try manually: " + email);
            });
        });
    }


    // scroll stuff
    document.querySelectorAll('.header-nav a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);

            if (targetEl) {
                // header height in pixels
                const headerOffset = document.querySelector('.main-header').offsetHeight;

                // calculate exact top position minus header
                const elementPosition = targetEl.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

