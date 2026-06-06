const projeto = document.querySelector(".projeto");

projeto.addEventListener("mouseenter", () => {
    projeto.style.transform = "scale(1.03)";
});

projeto.addEventListener("mouseleave", () => {
    projeto.style.transform = "scale(1)";
});