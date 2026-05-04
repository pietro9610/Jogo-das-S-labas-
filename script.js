// 1. Banco de Dados das Palavras
// Complete a lista seguindo este padrão exato
let bancoDePalavras = [
    { palavra: 'BOLA', img: 'img/bola.jpg', correta: 'BO', silabas: ['BA', 'BE', 'BO', 'BU'], audioSilaba: 'audio/silabas/bo_aberto.mp3', audioPalavra: 'audio/palavras/bola.mp3' },
    { palavra: 'BOLO', img: 'img/bolo.jpg', correta: 'BO', silabas: ['BO', 'CO', 'DO', 'FO'], audioSilaba: 'audio/silabas/bo_fechado.mp3', audioPalavra: 'audio/palavras/bolo.mp3' },
    { palavra: 'BOTA', img: 'img/bota.jpg', correta: 'BO', silabas: ['BO', 'BA', 'CA', 'TA'], audioSilaba: 'audio/silabas/bo_aberto.mp3', audioPalavra: 'audio/palavras/bota.mp3' },
    { palavra: 'BULE', img: 'img/bule.jpg', correta: 'BU', silabas: ['BU', 'BA', 'BE', 'BI'], audioSilaba: 'audio/silabas/bu.mp3', audioPalavra: 'audio/palavras/bule.mp3' },
    // ... Adicione as outras 56 palavras aqui seguindo o mesmo formato
];

let palavrasRestantes = [...bancoDePalavras];
let palavraAtual = null;

// Seleção de Elementos
const displayImagem = document.getElementById('display-imagem');
const slotVazio = document.getElementById('slot-vazio');
const parteExistente = document.getElementById('parte-existente-palavra');
const opcoesContainer = document.getElementById('opcoes-silabas');
const feedbackVisual = document.getElementById('feedback-visual');

// 2. Função para Sortear Palavra Sem Repetir
function sortearPalavra() {
    if (palavrasRestantes.length === 0) {
        alert("Parabéns! Você completou todas as palavras!");
        palavrasRestantes = [...bancoDePalavras]; // Reinicia o jogo
    }

    const index = Math.floor(Math.random() * palavrasRestantes.length);
    palavraAtual = palavrasRestantes.splice(index, 1)[0];
    montarFase();
}

// 3. Montar a Interface da Fase
function montarFase() {
    displayImagem.src = palavraAtual.img;
    slotVazio.textContent = "?";
    slotVazio.classList.remove('shake');
    parteExistente.textContent = palavraAtual.palavra.replace(palavraAtual.correta, "");
    
    opcoesContainer.innerHTML = "";
    palavraAtual.silabas.forEach(silaba => {
        const btn = document.createElement('button');
        btn.classList.add('btn-silaba');
        btn.textContent = silaba;
        btn.draggable = true;
        
        // Eventos de Drag (Mouse)
        btn.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text', silaba);
            btn.classList.add('dragging');
        });
        btn.addEventListener('dragend', () => btn.classList.remove('dragging'));

        // Evento para Touch (Celular/Tablet) usando clique simples para facilitar
        btn.addEventListener('touchstart', () => {
            verificarResposta(silaba);
        });

        opcoesContainer.appendChild(btn);
    });
}

// 4. Lógica de Drag and Drop
slotVazio.addEventListener('dragover', (e) => e.preventDefault());
slotVazio.addEventListener('drop', (e) => {
    const silabaRecebida = e.dataTransfer.getData('text');
    verificarResposta(silabaRecebida);
});

// 5. Verificação de Acerto ou Erro
function verificarResposta(silaba) {
    if (silaba === palavraAtual.correta) {
        processarAcerto(silaba);
    } else {
        processarErro();
    }
}

function processarAcerto(silaba) {
    slotVazio.textContent = silaba;
    slotVazio.style.borderStyle = "solid";
    
    // Tocar Áudios em sequência
    tocarAudio(palavraAtual.audioSilaba, () => {
        tocarAudio(palavraAtual.audioPalavra, () => {
            tocarAudio('audio/feedbacks/acertou.mp3');
        });
    });

    // Confetes
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    setTimeout(sortearPalavra, 4000); // Espera 4s para a próxima
}

function processarErro() {
    tocarAudio('audio/feedbacks/errou.mp3');
    document.getElementById('game-wrapper').classList.add('shake');
    feedbackVisual.textContent = "😢";
    
    setTimeout(() => {
        document.getElementById('game-wrapper').classList.remove('shake');
        feedbackVisual.textContent = "";
    }, 2000);
}

// Auxiliar para tocar áudio
function tocarAudio(caminho, aoTerminar) {
    const audio = new Audio(caminho);
    audio.play();
    if (aoTerminar) audio.onended = aoTerminar;
}

// Iniciar o jogo
sortearPalavra();
