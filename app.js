// Meu primeiro código em ADS!
// 1. Mapeamento dos elementos do HTML
const buttonLike = document.getElementById('btn-like');
const txtCounter = document.getElementById('counter');

// 2. Estado da aplicação (dados salvos no navegador)
let totalLikes = Number(localStorage.getItem('projeto_likes')) || 0;
// Verifica se a chave 'ja_curtiu' existe no navegador (retorna true ou false)
let userAlreadyLiked = localStorage.getItem('ja_curtiu') === 'true';

// 3. Função que atualiza a interface visual
function renderScreen() {
    // Atualiza o texto do contador de curtidas
    txtCounter.textContent = `${totalLikes} ${totalLikes === 1 ? 'curtida' : 'curtidas'}`;

    // Se o usuário já curtiu, bloqueia o botão e muda o visual
    if (userAlreadyLiked) {
        buttonLike.textContent = "✓ Já curtido";
        buttonLike.disabled = true; // Bloqueia novos cliques
        buttonLike.style.backgroundColor = "#29292e"; // Deixa o botão cinza escuro
        buttonLike.style.color = "#a8a8b3"; // Texto cinza claro
        buttonLike.style.cursor = "not-allowed"; // Muda o desenho do mouse para bloqueado
    }
}

// 4. Função que processa a lógica do clique
function handleLike() {
    // Segurança extra: se já curtiu, interrompe a função imediatamente
    if (userAlreadyLiked) return;

    totalLikes += 1; 
    userAlreadyLiked = true; // Muda o estado para "já curtiu"

    // Salva as duas informações no banco local do navegador
    localStorage.setItem('projeto_likes', totalLikes);
    localStorage.setItem('ja_curtiu', 'true');

    // Atualiza a tela com as novas mudanças
    renderScreen();
}

// 5. Inicialização do sistema
buttonLike.addEventListener('click', handleLike);
renderScreen();