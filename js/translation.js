const selectedLanguage = document.getElementById("selectedLanguage");
const languageDropdown = document.querySelector(".languageDropdown");
const languageOptions = document.querySelectorAll(".languageOption");
const currentFlag = document.getElementById("currentFlag");

// Abre e fecha o dropdown ao clicar no botão principal
selectedLanguage.addEventListener("click", (event) => {
    event.stopPropagation(); // Impede o fechamento imediato ao clicar no botão
    languageDropdown.classList.toggle("open");
});

// Atualiza a imagem e o texto ao selecionar um idioma
languageOptions.forEach(option => {
    option.addEventListener("click", () => {
        const lang = option.dataset.lang;
        const imgSrc = option.querySelector("img").src;
        const text = option.textContent.trim();

        // Atualiza a área visível do dropdown
        currentFlag.src = imgSrc;
        selectedLanguage.querySelector("span").textContent = text;

        // Salva a seleção no localStorage
        localStorage.setItem("language", lang);

        // Fecha o dropdown
        languageDropdown.classList.remove("open");

        // Carrega o idioma selecionado
        loadLanguage(lang); // Função de tradução que você já implementou
    });
});

// Fecha o dropdown ao clicar fora
document.addEventListener("click", (event) => {
    if (!languageDropdown.contains(event.target) && !selectedLanguage.contains(event.target)) {
        languageDropdown.classList.remove("open");
    }
});

// Carrega o idioma salvo ao carregar a página
const savedLanguage = localStorage.getItem("language") || "en";
const savedOption = document.querySelector(`.languageOption[data-lang="${savedLanguage}"]`);

if (savedOption) {
    const imgSrc = savedOption.querySelector("img").src;
    const text = savedOption.textContent.trim();
    currentFlag.src = imgSrc;
    selectedLanguage.querySelector("span").textContent = text;
    loadLanguage(savedLanguage);
}