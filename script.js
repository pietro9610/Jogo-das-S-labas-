const bancoDePalavras = [
    { palavra: "BEBÊ", imagem: "img/bebe.png", audioPalavra: "audio/palavras/bebe.mp3", silabaCorreta: "BE", audioSilaba: "audio/silabas/be.mp3", opcoes: ["BA", "BE", "BO"] },
    { palavra: "PATO", imagem: "img/pato.png", audioPalavra: "audio/palavras/pato.mp3", silabaCorreta: "PA", audioSilaba: "audio/silabas/pa.mp3", opcoes: ["PA", "PO", "PU"] },
    { palavra: "MACACO", imagem: "img/macaco.png", audioPalavra: "audio/palavras/macaco.mp3", silabaCorreta: "MA", audioSilaba: "audio/silabas/ma.mp3", opcoes: ["ME", "MA", "MO"] },
    { palavra: "CASA", imagem: "img/casa.png", audioPalavra: "audio/palavras/casa.mp3", silabaCorreta: "CA", audioSilaba: "audio/silabas/ca.mp3", opcoes: ["CO", "CA", "CU"] },
    { palavra: "PIPOCA", imagem: "img/pipoca.png", audioPalavra: "audio/palavras/pipoca.mp3", silabaCorreta: "PI", audioSilaba: "audio/silabas/pi.mp3", opcoes: ["PA", "PI", "PO"] },
    { palavra: "BANANA", imagem: "img/banana.png", audioPalavra: "audio/palavras/banana.mp3", silabaCorreta: "BA", audioSilaba: "audio/silabas/ba.mp3", opcoes: ["BO", "BA", "BE"] },
    { palavra: "GELO", imagem: "img/gelo.png", audioPalavra: "audio/palavras/gelo.mp3", silabaCorreta: "GE", audioSilaba: "audio/silabas/ge.mp3", opcoes: ["GA", "GE", "GO"] },
    { palavra: "BOLA", imagem: "img/bola.png", audioPalavra: "audio/palavras/bola.mp3", silabaCorreta: "BO", audioSilaba: "audio/silabas/bo.mp3", opcoes: ["BA", "BO", "BU"] },
    { palavra: "TOMATE", imagem: "img/tomate.png", audioPalavra: "audio/palavras/tomate.mp3", silabaCorreta: "TO", audioSilaba: "audio/silabas/to.mp3", opcoes: ["TA", "TE", "TO"] },
    { palavra: "DADO", imagem: "img/dado.png", audioPalavra: "audio/palavras/dado.mp3", silabaCorreta: "DA", audioSilaba: "audio/silabas/da.mp3", opcoes: ["DA", "DE", "DO"] },
    { palavra: "SAPATO", imagem: "img/sapato.png", audioPalavra: "audio/palavras/sapato.mp3", silabaCorreta: "SA", audioSilaba: "audio/silabas/sa.mp3", opcoes: ["SE", "SA", "SO"] },
    { palavra: "NAVE", imagem: "img/nave.png", audioPalavra: "audio/palavras/nave.mp3", silabaCorreta: "NA", audioSilaba: "audio/silabas/na.mp3", opcoes: ["NA", "NE", "NO"] },
    { palavra: "GATO", imagem: "img/gato.png", audioPalavra: "audio/palavras/gato.mp3", silabaCorreta: "GA", audioSilaba: "audio/silabas/ga.mp3", opcoes: ["GA", "GO", "GU"] },
    { palavra: "CAVALO", imagem: "img/cavalo.png", audioPalavra: "audio/palavras/cavalo.mp3", silabaCorreta: "CA", audioSilaba: "audio/silabas/ca.mp3", opcoes: ["CA", "CO", "CU"] },
    { palavra: "MALA", imagem: "img/mala.png", audioPalavra: "audio/palavras/mala.mp3", silabaCorreta: "MA", audioSilaba: "audio/silabas/ma.mp3", opcoes: ["MA", "ME", "MI"] },
    { palavra: "BONECA", imagem: "img/boneca.png", audioPalavra: "audio/palavras/boneca.mp3", silabaCorreta: "BO", audioSilaba: "audio/silabas/bo.mp3", opcoes: ["BA", "BO", "BE"] },
    { palavra: "MAPA", imagem: "img/mapa.png", audioPalavra: "audio/palavras/mapa.mp3", silabaCorreta: "MA", audioSilaba: "audio/silabas/ma.mp3", opcoes: ["MA", "MO", "MU"] },
    { palavra: "CANETA", imagem: "img/caneta.png", audioPalavra: "audio/palavras/caneta.mp3", silabaCorreta: "CA", audioSilaba: "audio/silabas/ca.mp3", opcoes: ["CA", "CO", "CU"] },
    { palavra: "RATO", imagem: "img/rato.png", audioPalavra: "audio/palavras/rato.mp3", silabaCorreta: "RA", audioSilaba: "audio/silabas/ra.mp3", opcoes: ["RA", "RE", "RO"] },
    { palavra: "SACOLA", imagem: "img/sacola.png", audioPalavra: "audio/palavras/sacola.mp3", silabaCorreta: "SA", audioSilaba: "audio/silabas/sa.mp3", opcoes: ["SA", "SE", "SO"] },
    { palavra: "BULE", imagem: "img/bule.png", audioPalavra: "audio/palavras/bule.mp3", silabaCorreta: "BU", audioSilaba: "audio/silabas/bu.mp3", opcoes: ["BA", "BE", "BU"] },
    { palavra: "JABUTI", imagem: "img/jabuti.png", audioPalavra: "audio/palavras/jabuti.mp3", silabaCorreta: "JA", audioSilaba: "audio/silabas/ja.mp3", opcoes: ["JA", "JE", "JO"] },
    { palavra: "PIPA", imagem: "img/pipa.png", audioPalavra: "audio/palavras/pipa.mp3", silabaCorreta: "PI", audioSilaba: "audio/silabas/pi.mp3", opcoes: ["PA", "PI", "PO"] },
    { palavra: "SALADA", imagem: "img/salada.png", audioPalavra: "audio/palavras/salada.mp3", silabaCorreta: "SA", audioSilaba: "audio/silabas/sa.mp3", opcoes: ["SA", "SE", "SI"] },
    { palavra: "FOGO", imagem: "img/fogo.png", audioPalavra: "audio/palavras/fogo.mp3", silabaCorreta: "FO", audioSilaba: "audio/silabas/fo.mp3", opcoes: ["FA", "FE", "FO"] },
    { palavra: "TIJOLO", imagem: "img/tijolo.png", audioPalavra: "audio/palavras/tijolo.mp3", silabaCorreta: "TI", audioSilaba: "audio/silabas/ti.mp3", opcoes: ["TA", "TE", "TI"] },
    { palavra: "VACA", imagem: "img/vaca.png", audioPalavra: "audio/palavras/vaca.mp3", silabaCorreta: "VA", audioSilaba: "audio/silabas/va.mp3", opcoes: ["VA", "VE", "VO"] },
    { palavra: "MENINO", imagem: "img/menino.png", audioPalavra: "audio/palavras/menino.mp3", silabaCorreta: "ME", audioSilaba: "audio/silabas/me.mp3", opcoes: ["MA", "ME", "MI"] },
    { palavra: "SAPO", imagem: "img/sapo.png", audioPalavra: "audio/palavras/sapo.mp3", silabaCorreta: "SA", audioSilaba: "audio/silabas/sa.mp3", opcoes: ["SA", "SE", "SO"] },
    { palavra: "BATATA", imagem: "img/batata.png", audioPalavra: "audio/palavras/batata.mp3", silabaCorreta: "BA", audioSilaba: "audio/silabas/ba.mp3", opcoes: ["BA", "BE", "BO"] },
    { palavra: "BOLO", imagem: "img/bolo.png", audioPalavra: "audio/palavras/bolo.mp3", silabaCorreta: "BO", audioSilaba: "audio/silabas/bo.mp3", opcoes: ["BA", "BE", "BO"] },
    { palavra: "GORILA", imagem: "img/gorila.png", audioPalavra: "audio/palavras/gorila.mp3", silabaCorreta: "GO", audioSilaba: "audio/silabas/go.mp3", opcoes: ["GA", "GO", "GU"] },
    { palavra: "CAMA", imagem: "img/cama.png", audioPalavra: "audio/palavras/cama.mp3", silabaCorreta: "CA", audioSilaba: "audio/silabas/ca.mp3", opcoes: ["CA", "CO", "CU"] },
    { palavra: "CORUJA", imagem: "img/coruja.png", audioPalavra: "audio/palavras/coruja.mp3", silabaCorreta: "CO", audioSilaba: "audio/silabas/co.mp3", opcoes: ["CA", "CO", "CU"] },
    { palavra: "GARFO", imagem: "img/garfo.png", audioPalavra: "audio/palavras/garfo.mp3", silabaCorreta: "FO", audioSilaba: "audio/silabas/fo.mp3", opcoes: ["FA", "FE", "FO"] },
    { palavra: "CAMELO", imagem: "img/camelo.png", audioPalavra: "audio/palavras/camelo.mp3", silabaCorreta: "CA", audioSilaba: "audio/silabas/ca.mp3", opcoes: ["CA", "CO", "CU"] },
    { palavra: "FADA", imagem: "img/fada.png", audioPalavra: "audio/palavras/fada.mp3", silabaCorreta: "FA", audioSilaba: "audio/silabas/fa.mp3", opcoes: ["FA", "FE", "FO"] },
    { palavra: "CEBOLA", imagem: "img/cebola.png", audioPalavra: "audio/palavras/cebola.mp3", silabaCorreta: "CE", audioSilaba: "audio/silabas/ce.mp3", opcoes: ["CA", "CE", "CI"] },
    { palavra: "FACA", imagem: "img/faca.png", audioPalavra: "audio/palavras/faca.mp3", silabaCorreta: "FA", audioSilaba: "audio/silabas/fa.mp3", opcoes: ["FA", "FE", "FI"] },
    { palavra: "BUZINA", imagem: "img/buzina.png", audioPalavra: "audio/palavras/buzina.mp3", silabaCorreta: "BU", audioSilaba: "audio/silabas/bu.mp3", opcoes: ["BA", "BE", "BU"] },
    { palavra: "COPO", imagem: "img/copo.png", audioPalavra: "audio/palavras/copo.mp3", silabaCorreta: "CO", audioSilaba: "audio/silabas/co.mp3", opcoes: ["CA", "CO", "CU"] },
    { palavra: "RODA", imagem: "img/roda.png", audioPalavra: "audio/palavras/roda.mp3", silabaCorreta: "RO", audioSilaba: "audio/silabas/ro.mp3", opcoes: ["RA", "RE", "RO"] },
    { palavra: "PENA", imagem: "img/pena.png", audioPalavra: "audio/palavras/pena.mp3", silabaCorreta: "PE", audioSilaba: "audio/silabas/pe.mp3", opcoes: ["PA", "PE", "PI"] },
    { palavra: "LATA", imagem: "img/lata.png", audioPalavra: "audio/palavras/lata.mp3", silabaCorreta: "LA", audioSilaba: "audio/silabas/la.mp3", opcoes: ["LA", "LE", "LO"] },
    { palavra: "VELA", imagem: "img/vela.png", audioPalavra: "audio/palavras/vela.mp3", silabaCorreta: "VE", audioSilaba: "audio/silabas/ve.mp3", opcoes: ["VA", "VE", "VI"] },
    { palavra: "LUPA", imagem: "img/lupa.png", audioPalavra: "audio/palavras/lupa.mp3", silabaCorreta: "LU", audioSilaba: "audio/silabas/lu.mp3", opcoes: ["LA", "LE", "LU"] },
    { palavra: "SINO", imagem: "img/sino.png", audioPalavra: "audio/palavras/sino.mp3", silabaCorreta: "SI", audioSilaba: "audio/silabas/si.mp3", opcoes: ["SA", "SE", "SI"] },
    { palavra: "BOCA", imagem: "img/boca.png", audioPalavra: "audio/palavras/boca.mp3", silabaCorreta: "BO", audioSilaba: "audio/silabas/bo.mp3", opcoes: ["BA", "BE", "BO"] },
    { palavra: "DEDO", imagem: "img/dedo.png", audioPalavra: "audio/palavras/dedo.mp3", silabaCorreta: "DE", audioSilaba: "audio/silabas/de.mp3", opcoes: ["DA", "DE", "DO"] },
    { palavra: "FOCA", imagem: "img/foca.png", audioPalavra: "audio/palavras/foca.mp3", silabaCorreta: "FO", audioSilaba: "audio/silabas/fo.mp3", opcoes: ["FA", "FE", "FO"] },
    { palavra: "LOJA", imagem: "img/loja.png", audioPalavra: "audio/palavras/loja.mp3", silabaCorreta: "LO", audioSilaba: "audio/silabas/lo.mp3", opcoes: ["LA", "LE", "LO"] },
    { palavra: "BONÉ", imagem: "img/bone.png", audioPalavra: "audio/palavras/bone.mp3", silabaCorreta: "BO", audioSilaba: "audio/silabas/bo.mp3", opcoes: ["BA", "BE", "BO"] },
    { palavra: "BODE", imagem: "img/bode.png", audioPalavra: "audio/palavras/bode.mp3", silabaCorreta: "BO", audioSilaba: "audio/silabas/bo.mp3", opcoes: ["BA", "BE", "BO"] },
    { palavra: "CAFÉ", imagem: "img/cafe.png", audioPalavra: "audio/palavras/cafe.mp3", silabaCorreta: "CA", audioSilaba: "audio/silabas/ca.mp3", opcoes: ["CA", "CO", "CU"] },
    { palavra: "MATO", imagem: "img/mato.png", audioPalavra: "audio/palavras/mato.mp3", silabaCorreta: "MA", audioSilaba: "audio/silabas/ma.mp3", opcoes: ["MA", "ME", "MI"] },
    { palavra: "FITA", imagem: "img/fita.png", audioPalavra: "audio/palavras/fita.mp3", silabaCorreta: "FI", audioSilaba: "audio/silabas/fi.mp3", opcoes: ["FA", "FE", "FI"] },
    { palavra: "PERA", imagem: "img/pera.png", audioPalavra: "audio/palavras/pera.mp3", silabaCorreta: "PE", audioSilaba: "audio/silabas/pe.mp3", opcoes: ["PA", "PE", "PI"] },
    { palavra: "LOBO", imagem: "img/lobo.png", audioPalavra: "audio/palavras/lobo.mp3", silabaCorreta: "LO", audioSilaba: "audio/silabas/lo.mp3", opcoes: ["LA", "LE", "LO"] },
    { palavra: "LIXO", imagem: "img/lixo.png", audioPalavra: "audio/palavras/lixo.mp3", silabaCorreta: "LI", audioSilaba: "audio/silabas/li.mp3", opcoes: ["LA", "LE", "LI"] },
    { palavra: "MOTO", imagem: "img/moto.png", audioPalavra: "audio/palavras/moto.mp3", silabaCorreta: "MO", audioSilaba: "audio/silabas/mo.mp3", opcoes: ["MA", "ME", "MO"] }
];

// ==========================================
// VARIÁVEIS DE CONTROLE DO JOGO
// ==========================================
let faseAtual = 0;
let palavraSorteada;
let bancoEmbaralhado = [];

// Áudios de feedback do sistema (certifique-se de ter esses arquivos na pasta)
const somAcerto = new Audio("audio/sistema/acerto.mp3");
const somErro = new Audio("audio/sistema/erro.mp3");

// ==========================================
// FUNÇÃO PARA INICIAR E EMBARALHAR
// ==========================================
function iniciarJogo() {
    // Embaralha as 60 palavras para o jogo não ser sempre igual
    bancoEmbaralhado = [...bancoDePalavras].sort(() => Math.random() - 0.5);
    faseAtual = 0;
    carregarFase();
}

// ==========================================
// CARREGAR A FASE ATUAL
// ==========================================
function carregarFase() {
    if (faseAtual >= bancoEmbaralhado.length) {
        alert("🎉 Parabéns! Você completou todas as palavras!");
        faseAtual = 0; // Reinicia o jogo
        iniciarJogo();
        return;
    }

    palavraSorteada = bancoEmbaralhado[faseAtual];

    // Atualiza a Imagem
    const imgElement = document.getElementById("imagem-pergunta");
    if (imgElement) imgElement.src = palavraSorteada.imagem;

    // Toca a palavra automaticamente (opcional)
    tocarPalavra();

    // Configura o botão de ouvir a palavra novamente
    const btnOuvir = document.getElementById("btn-ouvir");
    if (btnOuvir) {
        btnOuvir.onclick = tocarPalavra;
    }

    // Limpa o alvo de Drop
    const alvoDrop = document.getElementById("alvo-drop");
    alvoDrop.innerHTML = "?";
    alvoDrop.classList.remove("acerto");

    // Gera os botões de sílabas dinamicamente
    gerarOpcoes();
}

// Função para tocar o áudio da palavra completa
function tocarPalavra() {
    const audio = new Audio(palavraSorteada.audioPalavra);
    audio.play();
}

// ==========================================
// GERAR AS SÍLABAS ARRASTÁVEIS
// ==========================================
function gerarOpcoes() {
    const container = document.getElementById("container-opcoes");
    container.innerHTML = ""; // Limpa opções anteriores

    // Embaralha as 3 opções para a posição certa não ser sempre a mesma
    let opcoesEmbaralhadas = [...palavraSorteada.opcoes].sort(() => Math.random() - 0.5);

    opcoesEmbaralhadas.forEach(silaba => {
        const div = document.createElement("div");
        div.innerText = silaba;
        div.classList.add("opcao-silaba");
        
        // Habilita Drag and Drop para PC
        div.draggable = true;
        div.addEventListener("dragstart", handleDragStart);
        
        // Habilita Touch para Celular
        div.addEventListener("touchstart", handleTouchStart, { passive: false });
        div.addEventListener("touchmove", handleTouchMove, { passive: false });
        div.addEventListener("touchend", handleTouchEnd);

        // Toca o som da sílaba ao clicar/tocar
        div.addEventListener("click", () => {
            const audioSilaba = new Audio(`audio/silabas/${silaba.toLowerCase()}.mp3`);
            audioSilaba.play();
        });

        container.appendChild(div);
    });

    configurarAlvoDrop();
}

// ==========================================
// LÓGICA DE ARRASTAR (MOUSE - COMPUTADOR)
// ==========================================
function handleDragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.innerText);
}

function configurarAlvoDrop() {
    const alvo = document.getElementById("alvo-drop");

    alvo.addEventListener("dragover", (e) => {
        e.preventDefault(); // Necessário para permitir o drop
        alvo.classList.add("hover");
    });

    alvo.addEventListener("dragleave", () => {
        alvo.classList.remove("hover");
    });

    alvo.addEventListener("drop", (e) => {
        e.preventDefault();
        alvo.classList.remove("hover");
        const silabaSoltada = e.dataTransfer.getData("text/plain");
        verificarResposta(silabaSoltada);
    });
}

// ==========================================
// LÓGICA DE TOQUE (TOUCH - CELULAR/TABLET)
// ==========================================
let elementoEmMovimento = null;
let posOriginal = { x: 0, y: 0 };

function handleTouchStart(e) {
    elementoEmMovimento = e.target;
    const rect = elementoEmMovimento.getBoundingClientRect();
    posOriginal = { x: rect.left, y: rect.top };
    
    elementoEmMovimento.style.position = "absolute";
    elementoEmMovimento.style.zIndex = 1000;
}

function handleTouchMove(e) {
    if (!elementoEmMovimento) return;
    e.preventDefault(); // Impede a tela de rolar enquanto arrasta
    
    const touch = e.touches[0];
    elementoEmMovimento.style.left = touch.pageX - (elementoEmMovimento.offsetWidth / 2) + "px";
    elementoEmMovimento.style.top = touch.pageY - (elementoEmMovimento.offsetHeight / 2) + "px";
}

function handleTouchEnd(e) {
    if (!elementoEmMovimento) return;

    // Esconde o elemento temporariamente para ver o que tem embaixo do dedo
    elementoEmMovimento.style.display = "none";
    const touch = e.changedTouches[0];
    const elementoAbaixo = document.elementFromPoint(touch.clientX, touch.clientY);
    elementoEmMovimento.style.display = "flex"; // Mostra de novo

    // Verifica se soltou em cima do alvo
    if (elementoAbaixo && (elementoAbaixo.id === "alvo-drop" || elementoAbaixo.closest("#alvo-drop"))) {
        verificarResposta(elementoEmMovimento.innerText);
    } else {
        // Volta para a posição original se soltou fora
        elementoEmMovimento.style.position = "static";
    }

    elementoEmMovimento = null;
}

// ==========================================
// VERIFICAÇÃO DE ACERTO OU ERRO
// ==========================================
function verificarResposta(silaba) {
    const alvo = document.getElementById("alvo-drop");

    if (silaba === palavraSorteada.silabaCorreta) {
        // ACERTOU
        somAcerto.play();
        alvo.innerText = silaba;
        alvo.classList.add("acerto");
        
        // Efeito de Confetes (Chama a biblioteca canvas-confetti)
        if (typeof confetti === "function") {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

        // Aguarda 2 segundos e vai para a próxima fase
        setTimeout(() => {
            faseAtual++;
            carregarFase();
        }, 2000);

    } else {
        // ERROU
        somErro.play();
        alvo.classList.add("erro");
        
        // Treme a tela (Feedback visual)
        setTimeout(() => alvo.classList.remove("erro"), 500);

        // Se estiver no celular, as opções voltam ao normal
        gerarOpcoes(); 
    }
}

// Inicia o jogo quando a página carrega
window.onload = iniciarJogo;
