let ul = document.getElementById("ul");
let nav = document.getElementById("nav");
let isShowed = false;

window.onload = (e) => {
    if (isShowed === false && window.innerWidth <= 900) {
        nav.style.display = "none";
    };
};

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

