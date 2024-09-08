// Smooth scrolling for section links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle
const darkSwitch = document.getElementById('darkSwitch');
darkSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
