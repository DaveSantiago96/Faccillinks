const socialLinks = document.querySelectorAll('a');

socialLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        window.open(link.href, '_blank');
    });

    link.addEventListener('mouseover', () => {
        link.style.color = '#000';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '#333';
    });
});