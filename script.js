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
    { palavra: "BEBÊ", imagem: "img/bebe.png", audioPalavra: "audio/palavras/bebe.mp3", silabaCorreta: "BE", tipoSom: "fechado" },
    { palavra: "PATO", imagem: "img/pato.png", audioPalavra: "audio/palavras/pato.mp3", silabaCorreta: "PA" },
    { palavra: "MACACO", imagem: "img/macaco.png", audioPalavra: "audio/palavras/macaco.mp3", silabaCorreta: "MA" },
    { palavra: "CASA", imagem: "img/casa.png", audioPalavra: "audio/palavras/casa.mp3", silabaCorreta: "CA" },
    { palavra: "PIPOCA", imagem: "img/pipoca.png", audioPalavra: "audio/palavras/pipoca.mp3", silabaCorreta: "PI" },
    { palavra: "BANANA", imagem: "img/banana.png", audioPalavra: "audio/palavras/banana.mp3", silabaCorreta: "BA" },
    { palavra: "GELO", imagem: "img/gelo.png", audioPalavra: "audio/palavras/gelo.mp3", silabaCorreta: "GE", tipoSom: "fechado" },
    { palavra: "BOLA", imagem: "img/bola.png", audioPalavra: "audio/palavras/bola.mp3", silabaCorreta: "BO", tipoSom: "aberto" },
    { palavra: "TOMATE", imagem: "img/tomate.png", audioPalavra: "audio/palavras/tomate.mp3", silabaCorreta: "TO", tipoSom: "fechado" },
    { palavra: "DADO", imagem: "img/dado.png", audioPalavra: "audio/palavras/dado.mp3", silabaCorreta: "DA" },
    { palavra: "SAPATO", imagem: "img/sapato.png", audioPalavra: "audio/palavras/sapato.mp3", silabaCorreta: "SA" },
    { palavra: "NAVE", imagem: "img/nave.png", audioPalavra: "audio/palavras/nave.mp3", silabaCorreta: "NA" },
    { palavra: "GATO", imagem: "img/gato.png", audioPalavra: "audio/palavras/gato.mp3", silabaCorreta: "GA" },
    { palavra: "CAVALO", imagem: "img/cavalo.png", audioPalavra: "audio/palavras/cavalo.mp3", silabaCorreta: "CA" },
    { palavra: "MALA", imagem: "img/mala.png", audioPalavra: "audio/palavras/mala.mp3", silabaCorreta: "MA" },
    { palavra: "BONECA", imagem: "img/boneca.png", audioPalavra: "audio/palavras/boneca.mp3", silabaCorreta: "BO", tipoSom: "fechado" },
    { palavra: "MAPA", imagem: "img/mapa.png", audioPalavra: "audio/palavras/mapa.mp3", silabaCorreta: "MA" },
    { palavra: "CANETA", imagem: "img/caneta.png", audioPalavra: "audio/palavras/caneta.mp3", silabaCorreta: "CA" },
    { palavra: "RATO", imagem: "img/rato.png", audioPalavra: "audio/palavras/rato.mp3", silabaCorreta: "RA" },
    { palavra: "SACOLA", imagem: "img/sacola.png", audioPalavra: "audio/palavras/sacola.mp3", silabaCorreta: "SA" },
    { palavra: "BULE", imagem: "img/bule.png", audioPalavra: "audio/palavras/bule.mp3", silabaCorreta: "BU" },
    { palavra: "JABUTI", imagem: "img/jabuti.png", audioPalavra: "audio/palavras/jabuti.mp3", silabaCorreta: "JA" },
    { palavra: "PIPA", imagem: "img/pipa.png", audioPalavra: "audio/palavras/pipa.mp3", silabaCorreta: "PI" },
    { palavra: "SALADA", imagem: "img/salada.png", audioPalavra: "audio/palavras/salada.mp3", silabaCorreta: "SA" },
    { palavra: "FOGO", imagem: "img/fogo.png", audioPalavra: "audio/palavras/fogo.mp3", silabaCorreta: "FO", tipoSom: "fechado" },
    { palavra: "TIJOLO", imagem: "img/tijolo.png", audioPalavra: "audio/palavras/tijolo.mp3", silabaCorreta: "TI" },
    { palavra: "VACA", imagem: "img/vaca.png", audioPalavra: "audio/palavras/vaca.mp3", silabaCorreta: "VA" },
    { palavra: "MENINO", imagem: "img/menino.png", audioPalavra: "audio/palavras/menino.mp3", silabaCorreta: "ME", tipoSom: "fechado" },
    { palavra: "SAPO", imagem: "img/sapo.png", audioPalavra: "audio/palavras/sapo.mp3", silabaCorreta: "SA" },
    { palavra: "BATATA", imagem: "img/batata.png", audioPalavra: "audio/palavras/batata.mp3", silabaCorreta: "BA" },
    { palavra: "BOLO", imagem: "img/bolo.png", audioPalavra: "audio/palavras/bolo.mp3", silabaCorreta: "BO", tipoSom: "fechado" },
    { palavra: "GORILA", imagem: "img/gorila.png", audioPalavra: "audio/palavras/gorila.mp3", silabaCorreta: "GO", tipoSom: "fechado" },
    { palavra: "CAMA", imagem: "img/cama.png", audioPalavra: "audio/palavras/cama.mp3", silabaCorreta: "CA" },
    { palavra: "CORUJA", imagem: "img/coruja.png", audioPalavra: "audio/palavras/coruja.mp3", silabaCorreta: "CO", tipoSom: "fechado" },
    { palavra: "GARFO", imagem: "img/garfo.png", audioPalavra: "audio/palavras/garfo.mp3", silabaCorreta: "GA" },
    { palavra: "CAMELO", imagem: "img/camelo.png", audioPalavra: "audio/palavras/camelo.mp3", silabaCorreta: "CA" },
    { palavra: "FADA", imagem: "img/fada.png", audioPalavra: "audio/palavras/fada.mp3", silabaCorreta: "FA" },
    { palavra: "CEBOLA", imagem: "img/cebola.png", audioPalavra: "audio/palavras/cebola.mp3", silabaCorreta: "CE", tipoSom: "fechado" },
    { palavra: "FACA", imagem: "img/faca.png", audioPalavra: "audio/palavras/faca.mp3", silabaCorreta: "FA" },
    { palavra: "BUZINA", imagem: "img/buzina.png", audioPalavra: "audio/palavras/buzina.mp3", silabaCorreta: "BU" },
    { palavra: "COPO", imagem: "img/copo.png", audioPalavra: "audio/palavras/copo.mp3", silabaCorreta: "CO", tipoSom: "fechado" },
    { palavra: "RODA", imagem: "img/roda.png", audioPalavra: "audio/palavras/roda.mp3", silabaCorreta: "RO", tipoSom: "aberto" },
    { palavra: "PENA", imagem: "img/pena.png", audioPalavra: "audio/palavras/pena.mp3", silabaCorreta: "PE", tipoSom: "fechado" },
    { palavra: "LATA", imagem: "img/lata.png", audioPalavra: "audio/palavras/lata.mp3", silabaCorreta: "LA" },
    { palavra: "VELA", imagem: "img/vela.png", audioPalavra: "audio/palavras/vela.mp3", silabaCorreta: "VE", tipoSom: "fechado" },
    { palavra: "LUPA", imagem: "img/lupa.png", audioPalavra: "audio/palavras/lupa.mp3", silabaCorreta: "LU" },
    { palavra: "SINO", imagem: "img/sino.png", audioPalavra: "audio/palavras/sino.mp3", silabaCorreta: "SI" },
    { palavra: "BOCA", imagem: "img/boca.png", audioPalavra: "audio/palavras/boca.mp3", silabaCorreta: "BO", tipoSom: "fechado" },
    { palavra: "DEDO", imagem: "img/dedo.png", audioPalavra: "audio/palavras/dedo.mp3", silabaCorreta: "DE", tipoSom: "fechado" },
    { palavra: "FOCA", imagem: "img/foca.png", audioPalavra: "audio/palavras/foca.mp3", silabaCorreta: "FO", tipoSom: "aberto" },
    { palavra: "LOJA", imagem: "img/loja.png", audioPalavra: "audio/palavras/loja.mp3", silabaCorreta: "LO", tipoSom: "fechado" },
    { palavra: "BONÉ", imagem: "img/bone.png", audioPalavra: "audio/palavras/bone.mp3", silabaCorreta: "BO", tipoSom: "fechado" },
    { palavra: "BODE", imagem: "img/bode.png", audioPalavra: "audio/palavras/bode.mp3", silabaCorreta: "BO", tipoSom: "aberto" },
    { palavra: "CAFÉ", imagem: "img/cafe.png", audioPalavra: "audio/palavras/cafe.mp3", silabaCorreta: "CA" },
    { palavra: "MATO", imagem: "img/mato.png", audioPalavra: "audio/palavras/mato.mp3", silabaCorreta: "MA" },
    { palavra: "FITA", imagem: "img/fita.png", audioPalavra: "audio/palavras/fita.mp3", silabaCorreta: "FI" },
    { palavra: "PERA", imagem: "img/pera.png", audioPalavra: "audio/palavras/pera.mp3", silabaCorreta: "PE", tipoSom: "fechado" },
    { palavra: "LOBO", imagem: "img/lobo.png", audioPalavra: "audio/palavras/lobo.mp3", silabaCorreta: "LO", tipoSom: "fechado" },
    { palavra: "LIXO", imagem: "img/lixo.png", audioPalavra: "audio/palavras/lixo.mp3", silabaCorreta: "LI" }
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
