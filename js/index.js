console.log('index.js loaded');

window.addEventListener('DOMContentLoaded', (event) => {
    anime({
        targets: '.language-toggle button',
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeInOutQuad',
        delay: anime.stagger(200),
    });
});

document.querySelectorAll('.p_text').forEach((p, index) => {
    p.innerHTML = p.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

anime.timeline({ loop: false })
    .add({
        targets: '.p_text .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1200,
        delay: (el, i) => 10 * (i + 1)
    })
    .add({
        targets: '.p_text',
        opacity: 1,
        duration: 0,
        easing: "easeOutQuad",
        delay: 600
    });