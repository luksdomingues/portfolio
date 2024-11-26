const toggleButton = document.querySelector("#toggleDarkMode");
const themeIcon = document.querySelector("#themeIcon");

function updateThemeIcon() {
    if (document.body.classList.contains("dark-mode")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    updateThemeIcon();

    const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

updateThemeIcon();
