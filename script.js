// ==========================================
// 1. CONFIGURAÇÃO E BANCO DE DADOS
// ==========================================
const mapeamentoAudios = {
    "BA": "ba", "CA": "ca", "DA": "da", "FA": "fa", "GA": "ga", "JA": "ja", "LA": "la", "MA": "ma", "NA": "na", "PA": "pa", "RA": "ra", "SA": "sa", "TA": "ta", "VA": "va",
    "BE": { fechado: "be_fechado" }, "CE": { fechado: "se_fechado" }, "DE": { fechado: "de_fechado" },
    "FE": { aberto: "fe_aberto" }, "GE": { fechado: "je_fechado" }, "JE": { fechado: "je_fechado" },
    "LE": { fechado: "le_fechado" }, "ME": { fechado: "me_fechado" }, "NE": { fechado: "ne_fechado" },
    "PE": { fechado: "pe_fechado" }, "SE": { fechado: "se_fechado" }, "TE": { fechado: "te_fechado" },
    "VE": { fechado: "ve_fechado" }, "FI": "fi", "LI": "li", "NI": "ni", "PI": "pi", "RI": "ri", "SI": "si", "TI": "ti", "ZI": "zi",
    "BO": { aberto: "bo_aberto", fechado: "bo_fechado" }, "CO": { fechado: "co_fechado" }, "DO": { fechado: "do_fechado" },
    "FO": { aberto: "fo_aberto", fechado: "fo_fechado" }, "GO": { fechado: "go_fechado" }, "JO": { fechado: "jo_fechado" },
    "LO": { fechado: "lo_fechado" }, "NO": { fechado: "no_fechado" }, "PO": { fechado: "po_fechado" },
    "RO": { aberto: "ro_aberto", fechado: "ro_fechado" }, "TO": { fechado: "to_fechado" }, "XO": { fechado: "xo_fechado" },
    "BU": "bu", "JU": "ju", "RU": "ru", "SU": "su"
};

const bancoDePalavras = [
    { palavra: "DEDO", imagem: "img/dedo.png", audioPalavra: "audio/palavras/dedo.mp3", silabaCorreta: "DE", tipoSom: "fechado" },
    { palavra: "BOLA", imagem: "img/bola.png", audioPalavra: "audio/palavras/bola.mp3", silabaCorreta: "BO", tipoSom: "aberto" },
    { palavra: "PATO", imagem: "img/pato.png", audioPalavra: "audio/palavras/pato.mp3", silabaCorreta: "PA" },
    { palavra: "MACACO", imagem: "img/macaco.png", audioPalavra: "audio/palavras/macaco.mp3", silabaCorreta: "MA" },
    { palavra: "SAPO", imagem: "img/sapo.png", audioPalavra: "audio/palavras/sapo.mp3", silabaCorreta: "SA" },
    { palavra: "CASA", imagem: "img/casa.png", audioPalavra: "audio/palavras/casa.mp3", silabaCorreta: "CA" }
];

// ==========================================
// 2. VARIÁVEIS DE CONTROLO
// ==========================================
let faseAtual = 0;
let palavraSorteada;
let bancoEmbaralhado = [];
let draggingElement = null;

// ==========================================
// 3. LÓGICA PRINCIPAL
// ==========================================

function iniciarJogo() {
    // Embaralha o banco de palavras para o jogo ser diferente cada vez
    bancoEmbaralhado = [...bancoDePalavras].sort(() => Math.random() - 0.5);
    faseAtual = 0;
    carregarFase();
}

function carregarFase() {
    if (faseAtual >= bancoEmbaralhado.length) {
        alert("🎉 Parabéns! Completaste todas as palavras!");
        iniciarJogo();
        return;
    }

    palavraSorteada = bancoEmbaralhado[faseAtual];

    // 1. Atualiza a Imagem
    document.getElementById("imagem-pergunta").src = palavraSorteada.imagem;

    // 2. Lógica da Palavra Quebrada (SA - ? - TO)
    const texto = palavraSorteada.palavra;
    const silaba = palavraSorteada.silabaCorreta;
    const partes = texto.split(silaba);
    
    // partes[0] é o que vem antes, partes[1] o que vem depois
    document.getElementById("prefixo-palavra").innerText = partes[0] || "";
    document.getElementById("sufixo-palavra").innerText = partes[1] || "";

    // 3. Reset do Alvo (Onde a criança solta a sílaba)
    const alvo = document.getElementById("alvo-drop");
    alvo.innerText = "?";
    alvo.className = ""; // Remove classes de acerto/erro anteriores

    // 4. Configura o Botão de Ouvir (Voz do sistema)
    document.getElementById("btn-ouvir").onclick = () => {
        const msg = new SpeechSynthesisUtterance(palavraSorteada.palavra);
        msg.lang = 'pt-BR';
        window.speechSynthesis.speak(msg);
    };

    gerarOpcoes();
}

// ==========================================
// 4. GERAÇÃO DAS OPÇÕES (SÍLABAS)
// ==========================================

function gerarOpcoes() {
    const container = document.getElementById("container-opcoes");
    container.innerHTML = "";
    
    // Sorteio inteligente: pega sílabas da mesma "família" (mesma primeira letra)
    const todas = Object.keys(mapeamentoAudios);
    const familia = todas.filter(s => s[0] === palavraSorteada.silabaCorreta[0] && s !== palavraSorteada.silabaCorreta);
    
    // Escolhe 2 erradas da mesma família ou aleatórias se não houver família suficiente
    let erradas = familia.sort(() => 0.5 - Math.random()).slice(0, 2);
    while(erradas.length < 2) {
        let r = todas[Math.floor(Math.random() * todas.length)];
        if(r !== palavraSorteada.silabaCorreta && !erradas.includes(r)) erradas.push(r);
    }

    // Junta a correta com as erradas e embaralha os botões
    const opcoes = [palavraSorteada.silabaCorreta, ...erradas].sort(() => 0.5 - Math.random());

    opcoes.forEach(s => {
        const div = document.createElement("div");
        div.innerText = s;
        div.classList.add("opcao-silaba");
        div.draggable = true;

        // --- Eventos de Rato (Desktop) ---
        div.addEventListener("dragstart", (e) => e.dataTransfer.setData("text", s));

        // --- Eventos de Toque (Telemóvel/Tablet) ---
        div.addEventListener("touchstart", handleTouchStart, {passive: false});
        div.addEventListener("touchmove", handleTouchMove, {passive: false});
        div.addEventListener("touchend", handleTouchEnd);

        container.appendChild(div);
    });

    configurarAlvo();
}

// ==========================================
// 5. INTERATIVIDADE E VERIFICAÇÃO
// ==========================================

function configurarAlvo() {
    const alvo = document.getElementById("alvo-drop");
    alvo.ondragover = (e) => { e.preventDefault(); alvo.classList.add("hover"); };
    alvo.ondragleave = () => alvo.classList.remove("hover");
    alvo.ondrop = (e) => {
        e.preventDefault();
        verificarResposta(e.dataTransfer.getData("text"));
    };
}

function verificarResposta(escolhida) {
    const alvo = document.getElementById("alvo-drop");
    
    if (escolhida === palavraSorteada.silabaCorreta) {
        // ACERTO
        alvo.innerText = escolhida;
        alvo.classList.add("acerto");
        
        // Toca som de acerto (opcional, se tiveres os ficheiros)
        const n = Math.floor(Math.random() * 3) + 1;
        new Audio(`audio/sistema/Acerto${n}.mp3`).play().catch(() => {});

        // Solta confetes se a biblioteca estiver carregada
        if(window.confetti) {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }

        setTimeout(() => {
            faseAtual++;
            carregarFase();
        }, 2000);
    } else {
        // ERRO
        alvo.classList.add("erro");
        new Audio(`audio/sistema/Erro1.mp3`).play().catch(() => {});
        setTimeout(() => alvo.classList.remove("erro"), 1000);
    }
}

// ==========================================
// 6. FUNÇÕES AUXILIARES PARA TOUCH (ARRASTAR COM O DEDO)
// ==========================================

function handleTouchStart(e) { 
    draggingElement = e.target; 
}

function handleTouchMove(e) {
    if(!draggingElement) return;
    e.preventDefault();
    const touch = e.touches[0];
    
    // Faz a peça seguir o dedo
    draggingElement.style.position = 'fixed';
    draggingElement.style.left = touch.clientX - 40 + 'px';
    draggingElement.style.top = touch.clientY - 40 + 'px';
    draggingElement.style.zIndex = '1000';
}

function handleTouchEnd(e) {
    if(!draggingElement) return;
    
    const touch = e.changedTouches[0];
    const alvo = document.getElementById("alvo-drop");
    const rect = alvo.getBoundingClientRect();

    // Verifica se soltou o dedo por cima do buraquinho (alvo)
    if(touch.clientX > rect.left && touch.clientX < rect.right && 
       touch.clientY > rect.top && touch.clientY < rect.bottom) {
        verificarResposta(draggingElement.innerText);
    }
    
    // Volta a peça para o lugar original se não acertou
    draggingElement.style.position = 'static';
    draggingElement = null;
}

// Inicia o jogo quando a página carrega
window.onload = iniciarJogo;
