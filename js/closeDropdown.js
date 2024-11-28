document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (event) => {
        // Obter a linguagem selecionada
        const selectedLanguage = event.target.closest('.dropdown-item').getAttribute('data-lang');
        localStorage.setItem("language", selectedLanguage);
        loadLanguage(selectedLanguage);

        // Atualizar a imagem e o nome do idioma no botão
        const flagSrc = event.target.closest('.dropdown-item').querySelector('img').src;
        const languageName = event.target.closest('.dropdown-item').textContent.trim();

        // Atualiza a imagem e o texto no botão de seleção
        const dropdownButton = document.querySelector(".dropdown-btn");
        const selectedFlagImage = dropdownButton.querySelector('img');

        // Certifica-se de que o elemento está disponível antes de atualizar
        if (selectedFlagImage) {
            selectedFlagImage.src = flagSrc;
        }

        // Atualiza o texto do botão com o nome do idioma
        dropdownButton.textContent = languageName;

        // Fecha o dropdown
        document.querySelector('.dropdown-content').style.display = 'none';
    });
});

// Fechar o dropdown quando clicar fora dele
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelector('.dropdown-content').style.display = 'none';
    }
});

// Mostrar o dropdown ao clicar no botão
document.querySelector('.dropdown-btn').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});