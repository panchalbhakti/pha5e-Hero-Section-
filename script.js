// script.js

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".bg-image");

    document.addEventListener("mousemove", (e) => {
        images.forEach((img, index) => {
            const speed = (index + 1) * 0.02;
            const x = (window.innerWidth - e.clientX * speed) / 100;
            const y = (window.innerHeight - e.clientY * speed) / 100;

            img.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
        });
    });
});
