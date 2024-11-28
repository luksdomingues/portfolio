const languageMenu = document.querySelector('.languageMenu');
const languageOptions = document.querySelector('.languageOptions');
const languageChange = document.querySelector('.languageChange');

languageMenu.addEventListener('click', () => {
    languageChange.classList.toggle('active');
});

const languageItems = document.querySelectorAll('.languageOption');
languageItems.forEach(item => {
    item.addEventListener('click', () => {
        const selectedLanguage = item.getAttribute('data-lang');
        console.log(`Idioma selecionado: ${selectedLanguage}`);
        localStorage.setItem('language', selectedLanguage);
        loadLanguage(selectedLanguage);  // Aqui você chama a função de carregar o idioma
    });
});

// Carregar idioma salvo no localStorage ao inicializar
const savedLanguage = localStorage.getItem('language') || 'en';
loadLanguage(savedLanguage);

function loadLanguage(lang) {
    fetch("../lang/" + lang + ".json")
        .then(response => response.json())
        .then(translations => {
            applyTranslations(translations);
        });
}

function applyTranslations(translations) {
    // Função para aplicar as traduções aos elementos da página
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}