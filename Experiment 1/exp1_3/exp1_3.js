const toggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    toggle.innerText = savedTheme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode";
}

toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");

    if (current === "light") {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "dark");
        toggle.innerText = "☀️ Light Mode";
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        toggle.innerText = "🌙 Dark Mode";
    }
});
