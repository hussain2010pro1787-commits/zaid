let ul = document.getElementById("ul");
let nav = document.getElementById("nav");
let isShowed = false;

document.onclick = (e) => {
    if (window.innerWidth <= 900) {
        if (e.target === ul && !isShowed) {
        nav.style.display = "flex";
        isShowed = true
    } else {
        nav.style.display = "none";
        isShowed = false
    };
    }
};