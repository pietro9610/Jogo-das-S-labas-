// ==========================================
// 1. DICIONÁRIO DE MAPEAMENTO FONÉTICO
// ==========================================
const mapeamentoAudios = {
    "BA": "ba", "CA": "ca", "DA": "da", "FA": "fa", "GA": "ga", "JA": "ja", "LA": "la", "MA": "ma", "NA": "na", "PA": "pa", "RA": "ra", "SA": "sa", "TA": "ta", "VA": "va",
    "BE": { fechado: "be_fechado" },
    "CE": { fechado: "se_fechado" }, 
    "DE": { fechado: "de_fechado" },
    "FE": { aberto: "fe_aberto" },
    "GE": { fechado: "je_fechado" }, 
    "JE": { fechado: "je_fechado" },
    "LE": { fechado: "le_fechado" },
    "ME": { fechado: "me_fechado" },
    "NE": { fechado: "ne_fechado" },
    "PE": { fechado: "pe_fechado" },
    "SE": { fechado: "se_fechado" },
    "TE": { fechado: "te_fechado" },
    "VE": { fechado: "ve_fechado" },
    "FI": "fi", "LI": "li", "NI": "ni", "PI": "pi", "RI": "ri", "SI": "si", "TI": "ti", "ZI": "zi",
    "BO": { aberto: "bo_aberto", fechado: "bo_fechado" },
    "CO": { fechado: "co_fechado" },
    "DO": { fechado: "do_fechado" },
    "FO": { aberto: "fo_aberto", fechado: "fo_fechado" },
    "GO": { fechado: "go_fechado" },
    "JO": { fechado: "jo_fechado" },
    "LO": { fechado: "lo_fechado" },
    "NO": { fechado: "no_fechado" },
    "PO": { fechado: "po_fechado" },
    "RO": { aberto: "ro_aberto", fechado: "ro_fechado" },
    "TO": { fechado: "to_fechado" },
    "XO": { fechado: "xo_fechado" },
    "BU": "bu", "JU": "ju", "RU": "ru", "SU": "su"
};

// ==========================================
// 2. BANCO DE PALAVRAS
// ==========================================
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
// 3. VARIÁVEIS DE ESTADO
// ==========================================
let faseAtual = 0;
let palavraSorteada;
let bancoEmbaralhado = [];
let draggingElement = null;

// ==========================================
// 4. FUNÇÕES DE SUPORTE (Sorteio, Cores e Áudio)
// ==========================================

function mudarCorFundo() {
    const num = Math.floor(Math.random() * 6) + 1;
    document.body.className = `cor-fundo-${num}`;
}

function falarTTS(texto) {
    if ('speechSynthesis' in window) {
        const mensagem = new SpeechSynthesisUtterance(texto);
        mensagem.lang = 'pt-BR';
        mensagem.rate = 0.9;
        window.speechSynthesis.speak(mensagem);
    }
}

function tocarSom(caminho) {
    const audio = new Audio(caminho);
    audio.play().catch(e => console.log("Erro ao tocar áudio:", caminho));
}

function sortearOpcoes(correta) {
    const todasSilabas = Object.keys(mapeamentoAudios);
    const consoante = correta.charAt(0);
    
    // Regra: Tenta pegar sílabas da mesma família
    let familia = todasSilabas.filter(s => s.charAt(0) === consoante && s !== correta);
    
    let distratores = familia.sort(() => 0.5 - Math.random()).slice(0, 2);
    
    while(distratores.length < 2) {
        let randomS = todasSilabas[Math.floor(Math.random() * todasSilabas.length)];
        if(randomS !== correta && !distratores.includes(randomS)) distratores.push(randomS);
    }
    
    return [correta, ...distratores].sort(() => 0.5 - Math.random());
}

// ==========================================
// 5. LÓGICA PRINCIPAL
// ==========================================

function iniciarJogo() {
    bancoEmbaralhado = [...bancoDePalavras].sort(() => 0.5 - Math.random());
    faseAtual = 0;
    carregarFase();
}

function carregarFase() {
    if (faseAtual >= bancoEmbaralhado.length) {
        alert("🎉 Incrível! Você completou todas as palavras!");
        iniciarJogo();
        return;
    }

    mudarCorFundo();
    palavraSorteada = bancoEmbaralhado[faseAtual];

    // Imagem e TTS
    document.getElementById("imagem-pergunta").src = palavraSorteada.imagem;
    document.getElementById("btn-ouvir").onclick = () => falarTTS(palavraSorteada.palavra);
    
    // Auto-falar ao começar
    setTimeout(() => falarTTS(palavraSorteada.palavra), 500);

    // Reset Alvo
    const alvo = document.getElementById("alvo-drop");
    alvo.innerText = "?";
    alvo.className = ""; 

    gerarOpcoes();
}

function gerarOpcoes() {
    const container = document.getElementById("container-opcoes");
    container.innerHTML = "";
    const opcoes = sortearOpcoes(palavraSorteada.silabaCorreta);

    opcoes.forEach(silaba => {
        const div = document.createElement("div");
        div.innerText = silaba;
        div.classList.add("opcao-silaba");
        div.draggable = true;

        // Eventos Click (Ouvir sílaba)
        div.onclick = () => {
            const dados = mapeamentoAudios[silaba];
            let path = "";
            if (typeof dados === "string") path = `audio/silabas/${dados}.mp3`;
            else path = `audio/silabas/${dados[palavraSorteada.tipoSom] || Object.values(dados)[0]}.mp3`;
            tocarSom(path);
        };

        // --- MOUSE DRAG ---
        div.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text", silaba);
            div.style.opacity = "0.5";
        });
        div.addEventListener("dragend", () => div.style.opacity = "1");

        // --- TOUCH DRAG (TABLET/CELULAR) ---
        div.addEventListener("touchstart", handleTouchStart, {passive: false});
        div.addEventListener("touchmove", handleTouchMove, {passive: false});
        div.addEventListener("touchend", handleTouchEnd);

        container.appendChild(div);
    });

    configurarAlvoDesktop();
}

// ==========================================
// 6. INTERATIVIDADE (O PULO DO GATO)
// ==========================================

function configurarAlvoDesktop() {
    const alvo = document.getElementById("alvo-drop");
    alvo.ondragover = (e) => { e.preventDefault(); alvo.classList.add("hover"); };
    alvo.ondragleave = () => alvo.classList.remove("hover");
    alvo.ondrop = (e) => {
        e.preventDefault();
        alvo.classList.remove("hover");
        verificarResposta(e.dataTransfer.getData("text"));
    };
}

// Funções Touch
function handleTouchStart(e) {
    draggingElement = e.target;
    draggingElement.style.transition = "none";
}

function handleTouchMove(e) {
    if (!draggingElement) return;
    e.preventDefault();
    const touch = e.touches[0];
    
    draggingElement.style.position = 'fixed';
    draggingElement.style.left = (touch.clientX - 45) + 'px';
    draggingElement.style.top = (touch.clientY - 45) + 'px';
    draggingElement.style.zIndex = '1000';

    const alvo = document.getElementById("alvo-drop");
    const rect = alvo.getBoundingClientRect();

    if (touch.clientX > rect.left && touch.clientX < rect.right &&
        touch.clientY > rect.top && touch.clientY < rect.bottom) {
        alvo.classList.add("hover");
    } else {
        alvo.classList.remove("hover");
    }
}

function handleTouchEnd(e) {
    if (!draggingElement) return;
    const touch = e.changedTouches[0];
    const alvo = document.getElementById("alvo-drop");
    const rect = alvo.getBoundingClientRect();

    alvo.classList.remove("hover");

    if (touch.clientX > rect.left && touch.clientX < rect.right &&
        touch.clientY > rect.top && touch.clientY < rect.bottom) {
        verificarResposta(draggingElement.innerText);
    }

    draggingElement.style.position = 'static';
    draggingElement.style.zIndex = '1';
    draggingElement = null;
}

// ==========================================
// 7. VERIFICAÇÃO FINAL
// ==========================================

function verificarResposta(silaba) {
    const alvo = document.getElementById("alvo-drop");

    if (silaba === palavraSorteada.silabaCorreta) {
        // ACERTO
        const somAcerto = Math.floor(Math.random() * 3) + 1;
        tocarSom(`audio/sistema/Acerto${somAcerto}.mp3`);
        
        alvo.innerText = silaba;
        alvo.classList.add("acerto");

        if (typeof confetti === 'function') {
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        }

        // Toca o som da palavra após 500ms
        setTimeout(() => tocarSom(palavraSorteada.audioPalavra), 500);

        setTimeout(() => {
            faseAtual++;
            carregarFase();
        }, 2500);

    } else {
        // ERRO
        const somErro = Math.floor(Math.random() * 3) + 1;
        tocarSom(`audio/sistema/Erro${somErro}.mp3`);
        
        alvo.classList.add("erro");
        setTimeout(() => alvo.classList.remove("erro"), 1000);
    }
}

window.onload = iniciarJogo;
