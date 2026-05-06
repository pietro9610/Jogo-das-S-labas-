// ==========================================
// 1. DICIONÁRIO DE MAPEAMENTO FONÉTICO
// ==========================================
// Relaciona a sílaba com o nome exato do arquivo MP3 salvo.
const mapeamentoAudios = {
    "BA": "ba", "CA": "ca", "DA": "da", "FA": "fa", "GA": "ga", "JA": "ja", "LA": "la", "MA": "ma", "NA": "na", "PA": "pa", "RA": "ra", "SA": "sa", "TA": "ta", "VA": "va",
    "BE": { fechado: "be_fechado" },
    "CE": { fechado: "se_fechado" }, // O 'CE' de Cebola usa o som do 'se_fechado'
    "DE": { fechado: "de_fechado" },
    "FE": { aberto: "fe_aberto" },
    "GE": { fechado: "je_fechado" }, // O 'GE' de Gelo usa o som do 'je_fechado'
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
// 2. BANCO DE PALAVRAS AUTOMATIZADO
// ==========================================
// Sem o array "opcoes". O código fará isso sozinho!
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
// 3. VARIÁVEIS DE CONTROLE DO JOGO
// ==========================================
let faseAtual = 0;
let palavraSorteada;
let bancoEmbaralhado = [];

// ==========================================
// 4. FUNÇÕES DE SISTEMA (ÁUDIO E SORTEIO)
// ==========================================

// Função para tocar as frases aleatórias de Acerto (Acerto1.mp3 a Acerto3.mp3) ou Erro (Erro1.mp3 a Erro3.mp3)
function tocarIncentivo(tipo) {
    const numero = Math.floor(Math.random() * 3) + 1; // Sorteia 1, 2 ou 3
    const audio = new Audio(`audio/sistema/${tipo}${numero}.mp3`);
    audio.play();
}

// Descobre o arquivo MP3 correto com base no dicionário e tipo de som
function getCaminhoAudioSilaba(silaba, tipoSom = null) {
    const dados = mapeamentoAudios[silaba];
    if (!dados) return null; // Prevenção de erro caso a sílaba não exista

    let nomeArquivo = "";
    if (typeof dados === "string") {
        nomeArquivo = dados;
    } else if (tipoSom && dados[tipoSom]) {
        nomeArquivo = dados[tipoSom];
    } else {
        // Fallback: Se não tem tipo especifico, pega a primeira variação que tiver
        nomeArquivo = Object.values(dados)[0];
    }
    return `audio/silabas/${nomeArquivo}.mp3`;
}

// Sorteia 2 opções erradas (da mesma família ou aleatórias)
function sortearOpcoes(correta) {
    const todasSilabas = Object.keys(mapeamentoAudios);
    const consoanteCorreta = correta.charAt(0);
    
    // Busca sílabas da mesma "família" que não sejam a correta
    let mesmaFamilia = todasSilabas.filter(s => s.charAt(0) === consoanteCorreta && s !== correta);
    
    // Embaralha e seleciona até 2
    let distratores = mesmaFamilia.sort(() => Math.random() - 0.5).slice(0, 2);

    // Se faltarem opções (ex: Família do J tem poucas gravadas), preenche com aleatórias
    while (distratores.length < 2) {
        let aleatoria = todasSilabas[Math.floor(Math.random() * todasSilabas.length)];
        if (aleatoria !== correta && !distratores.includes(aleatoria)) {
            distratores.push(aleatoria);
        }
    }

    // Retorna as 3 sílabas (1 certa, 2 erradas) embaralhadas
    return [correta, ...distratores].sort(() => Math.random() - 0.5);
}

// ==========================================
// 5. FLUXO PRINCIPAL DO JOGO
// ==========================================
function iniciarJogo() {
    bancoEmbaralhado = [...bancoDePalavras].sort(() => Math.random() - 0.5);
    faseAtual = 0;
    carregarFase();
}

function carregarFase() {
    if (faseAtual >= bancoEmbaralhado.length) {
        alert("🎉 Parabéns! Você completou todas as palavras!");
        iniciarJogo();
        return;
    }

    palavraSorteada = bancoEmbaralhado[faseAtual];

    // Atualiza a Imagem
    const imgElement = document.getElementById("imagem-pergunta");
    if (imgElement) imgElement.src = palavraSorteada.imagem;

    tocarPalavra();

    const btnOuvir = document.getElementById("btn-ouvir");
    if (btnOuvir) btnOuvir.onclick = tocarPalavra;

    // Reseta o Alvo
    const alvoDrop = document.getElementById("alvo-drop");
    alvoDrop.innerHTML = "?";
    alvoDrop.className = ""; // Remove as classes erro/acerto

    gerarOpcoes();
}

function tocarPalavra() {
    const audio = new Audio(palavraSorteada.audioPalavra);
    audio.play();
}

function gerarOpcoes() {
    const container = document.getElementById("container-opcoes");
    container.innerHTML = ""; 

    // Sorteio Automático acontece AQUI!
    let opcoesSorteadas = sortearOpcoes(palavraSorteada.silabaCorreta);

    opcoesSorteadas.forEach(silaba => {
        const div = document.createElement("div");
        div.innerText = silaba;
        div.classList.add("opcao-silaba");
        
        div.draggable = true;
        div.addEventListener("dragstart", handleDragStart);
        
        div.addEventListener("touchstart", handleTouchStart, { passive: false });
        div.addEventListener("touchmove", handleTouchMove, { passive: false });
        div.addEventListener("touchend", handleTouchEnd);

        // Toca o som inteligente ao clicar na sílaba
        div.addEventListener("click", () => {
            const tipoSomUsado = (silaba === palavraSorteada.silabaCorreta) ? palavraSorteada.tipoSom : null;
            const caminhoAudio = getCaminhoAudioSilaba(silaba, tipoSomUsado);
            if(caminhoAudio) {
                new Audio(caminhoAudio).play();
            }
        });

        container.appendChild(div);
    });

    configurarAlvoDrop();
}

// ==========================================
// 6. LÓGICAS DE ARRASTAR E SOLTAR
// ==========================================
function handleDragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.innerText);
}

function configurarAlvoDrop() {
    const alvo = document.getElementById("alvo-drop");

    alvo.addEventListener("dragover", (e) => {
        e.preventDefault(); 
        alvo.classList.add("hover");
    });

    alvo.addEventListener("dragleave", () => alvo.classList.remove("hover"));

    alvo.addEventListener("drop", (e) => {
        e.preventDefault();
        alvo.classList.remove("hover");
        const silabaSoltada = e.dataTransfer.getData("text/plain");
        verificarResposta(silabaSoltada);
    });
}

// Touch Devices
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
    e.preventDefault(); 
    
    const touch = e.touches[0];
    elementoEmMovimento.style.left = touch.pageX - (elementoEmMovimento.offsetWidth / 2) + "px";
    elementoEmMovimento.style.top = touch.pageY - (elementoEmMovimento.offsetHeight / 2) + "px";
}

function handleTouchEnd(e) {
    if (!elementoEmMovimento) return;

    elementoEmMovimento.style.display = "none";
    const touch = e.changedTouches[0];
    const elementoAbaixo = document.elementFromPoint(touch.clientX, touch.clientY);
    elementoEmMovimento.style.display = "flex"; 

    if (elementoAbaixo && (elementoAbaixo.id === "alvo-drop" || elementoAbaixo.closest("#alvo-drop"))) {
        verificarResposta(elementoEmMovimento.innerText);
    } else {
        elementoEmMovimento.style.position = "static";
    }

    elementoEmMovimento = null;
}

// ==========================================
// 7. VERIFICAÇÃO DE ACERTO OU ERRO
// ==========================================
function verificarResposta(silaba) {
    const alvo = document.getElementById("alvo-drop");

    if (silaba === palavraSorteada.silabaCorreta) {
        // Toca Acerto1.mp3, Acerto2.mp3 ou Acerto3.mp3
        tocarIncentivo("Acerto"); 
        alvo.innerText = silaba;
        alvo.classList.add("acerto");
        
        if (typeof confetti === "function") {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }

        setTimeout(() => {
            faseAtual++;
            carregarFase();
        }, 2000);

    } else {
        // Toca Erro1.mp3, Erro2.mp3 ou Erro3.mp3
        tocarIncentivo("Erro");
        alvo.classList.add("erro");
        
        setTimeout(() => alvo.classList.remove("erro"), 500);
        gerarOpcoes(); 
    }
}

window.onload = iniciarJogo;
