// Only run after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Grab all project links inside .projects-row
    const projectLinks = document.querySelectorAll('.projects-row .project-link');

    projectLinks.forEach(link => {
        const url = new URL(link.href, window.location.origin);
        // append "from=list" query parameter
        url.searchParams.set('from', 'list');
        link.href = url.toString();
    });
});