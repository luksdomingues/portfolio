document.addEventListener("DOMContentLoaded", () => {
    const selectedLanguage = document.getElementById("selectedLanguage");
    const languageDropdown = document.querySelector(".languageDropdown");
    const languageOptions = document.querySelectorAll(".languageOption");
    const currentFlag = document.getElementById("currentFlag");

    // Abre e fecha o dropdown
    selectedLanguage.addEventListener("click", (event) => {
        event.stopPropagation();
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
            loadLanguage(lang);
        });
    });

    // Carrega o idioma salvo no localStorage ao inicializar
    const savedLanguage = localStorage.getItem("language") || "en";
    loadLanguage(savedLanguage);
});

// Função para carregar as traduções de idioma
function loadLanguage(lang) {
    fetch(`../lang/${lang}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar o arquivo de idioma: ${lang}`);
            }
            return response.json();
        })
        .then(translations => {
            applyTranslations(translations);
        })
        .catch(error => console.error("Erro ao carregar as traduções:", error));
}

// Função para aplicar as traduções
function applyTranslations(translations) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}