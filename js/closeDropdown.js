document.addEventListener("DOMContentLoaded", () => {
    // Fecha o dropdown ao clicar fora dele
    document.addEventListener("click", () => {
        const languageDropdown = document.querySelector(".dropdown-content");
        if (languageDropdown) {
            languageDropdown.classList.remove("open");
        }
    });
});