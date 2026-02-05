const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.milestone').forEach(m => {
    m.style.opacity = "0";
    m.style.transform = "translateX(-20px)";
    m.style.transition = "all 0.6s ease-out";
    observer.observe(m);
});