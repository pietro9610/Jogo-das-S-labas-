// CONFIGURAÇÕES DE PASTAS (Caminhos do seu GitHub)
const PATH_IMG = "imagens/";
const PATH_SISTEMA = "audio/Sistema/"; // S Maiúsculo corrigido
const PATH_PALAVRAS = "audio/palavras/";
const PATH_SILABAS = "audio/silabas/";

// BANCO DE DADOS (60 PALAVRAS ORIGINAIS)
const bancoDePalavras = [
    { p: "Bebê", s: "BE", a: "be_fechado.mp3" },
    { p: "Pato", s: "PA", a: "pa.mp3" },
    { p: "Macaco", s: "MA", a: "ma.mp3" },
    { p: "Casa", s: "CA", a: "ca.mp3" },
    { p: "Pipoca", s: "PI", a: "pi.mp3" },
    { p: "Banana", s: "BA", a: "ba.mp3" },
    { p: "Gelo", s: "GE", a: "ge_fechado.mp3" },
    { p: "Bola", s: "BO", a: "bo_aberto.mp3" },
    { p: "Tomate", s: "TO", a: "to_fechado.mp3" },
    { p: "Dado", s: "DA", a: "da.mp3" },
    { p: "Sapato", s: "SA", a: "sa.mp3" },
    { p: "Nave", s: "NA", a: "na.mp3" },
    { p: "Gato", s: "GA", a: "ga.mp3" },
    { p: "Cavalo", s: "CA", a: "ca.mp3" },
    { p: "Mala", s: "MA", a: "ma.mp3" },
    { p: "Boneca", s: "BO", a: "bo_fechado.mp3" },
    { p: "Mapa", s: "MA", a: "ma.mp3" },
    { p: "Caneta", s: "CA", a: "ca.mp3" },
    { p: "Rato", s: "RA", a: "ra.mp3" },
    { p: "Sacola", s: "SA", a: "sa.mp3" },
    { p: "Bule", s: "BU", a: "bu.mp3" },
    { p: "Jabuti", s: "JA", a: "ja.mp3" },
    { p: "Pipa", s: "PI", a: "pi.mp3" },
    { p: "Salada", s: "SA", a: "sa.mp3" },
    { p: "Fogo", s: "FO", a: "fo_fechado.mp3" },
    { p: "Tijolo", s: "TI", a: "ti.mp3" },
    { p: "Vaca", s: "VA", a: "va.mp3" },
    { p: "Menino", s: "ME", a: "me_fechado.mp3" },
    { p: "Sapo", s: "SA", a: "sa.mp3" },
    { p: "Batata", s: "BA", a: "ba.mp3" },
    { p: "Bolo", s: "BO", a: "bo_fechado.mp3" },
    { p: "Gorila", s: "GO", a: "go_fechado.mp3" },
    { p: "Cama", s: "CA", a: "ca.mp3" },
    { p: "Coruja", s: "CO", a: "co_fechado.mp3" },
    { p: "Garfo", s: "GA", a: "ga.mp3" },
    { p: "Camelo", s: "CA", a: "ca.mp3" },
    { p: "Fada", s: "FA", a: "fa.mp3" },
    { p: "Cebola", s: "CE", a: "ce_fechado.mp3" },
    { p: "Faca", s: "FA", a: "fa.mp3" },
    { p: "Buzina", s: "BU", a: "bu.mp3" },
    { p: "Copo", s: "CO", a: "co_fechado.mp3" },
    { p: "Roda", s: "RO", a: "ro_aberto.mp3" },
    { p: "Pena", s: "PE", a: "pe_fechado.mp3" },
    { p: "Lata", s: "LA", a: "la.mp3" },
    { p: "Vela", s: "VE", a: "ve_fechado.mp3" },
    { p: "Lupa", s: "LU", a: "lu.mp3" },
    { p: "Sino", s: "SI", a: "si.mp3" },
    { p: "Boca", s: "BO", a: "bo_fechado.mp3" },
    { p: "Dedo", s: "DE", a: "de_fechado.mp3" },
    { p: "Foca", s: "FO", a: "fo_aberto.mp3" },
    { p: "Loja", s: "LO", a: "lo_fechado.mp3" },
    { p: "Boné", s: "BO", a: "bo_fechado.mp3" },
    { p: "Bode", s: "BO", a: "bo_aberto.mp3" },
    { p: "Café", s: "CA", a: "ca.mp3" },
    { p: "Mato", s: "MA", a: "ma.mp3" },
    { p: "Fita", s: "FI", a: "fi.mp3" },
    { p: "Pera", s: "PE", a: "pe_fechado.mp3" },
    { p: "Lobo", s: "LO", a: "lo_fechado.mp3" },
    { p: "Lixo", s: "LI", a: "li.mp3" },
    { p: "Moto", s: "MO", a: "mo_fechado.mp3" }
];

let fase = 0;
let atual;
let embaralhado = [];

const normalizar = (texto) => texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// Função para testar se o arquivo existe antes de carregar a fase
async function verificarArquivoExiste(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch (e) {
        return false;
    }
}

function iniciar() {
    embaralhado = [...bancoDePalavras].sort(() => Math.random() - 0.5);
    fase = 0;
    carregarFase();
}

async function carregarFase() {
    if (fase >= embaralhado.length) {
        alert("Incrível! Você completou todas as palavras disponíveis!");
        fase = 0; iniciar(); return;
    }

    atual = embaralhado[fase];
    const nomeLimpo = normalizar(atual.p);
    const caminhoAudioSilaba = `${PATH_SILABAS}${atual.a}`;

    // BLINDAGEM: Verifica se o áudio da sílaba existe
    const existe = await verificarArquivoExiste(caminhoAudioSilaba);
    
    if (!existe) {
        console.warn(`Pulando "${atual.p}": Áudio ${atual.a} não encontrado.`);
        fase++;
        carregarFase();
        return;
    }

    // Carrega interface
    document.getElementById("imagem-pergunta").src = `${PATH_IMG}${nomeLimpo}.png`;
    const partes = atual.p.toUpperCase().split(atual.s.toUpperCase());
    document.getElementById("prefixo-palavra").innerText = partes[0] || "";
    document.getElementById("sufixo-palavra").innerText = partes[1] || "";
    
    const alvo = document.getElementById("alvo-drop");
    alvo.innerText = "?";
    alvo.className = "";

    document.getElementById("btn-ouvir").onclick = () => {
        new Audio(`${PATH_PALAVRAS}${nomeLimpo}.mp3`).play().catch(e => console.log("Erro ao tocar palavra"));
    };

    document.body.className = `cor-fundo-${(fase % 6) + 1}`;
    gerarOpcoes();
}

function gerarOpcoes() {
    const container = document.getElementById("container-opcoes");
    container.innerHTML = "";
    
    const erradas = ["BA", "MA", "PA", "CA", "LA", "DA", "BO", "FE"].filter(x => x !== atual.s);
    let opcoes = [atual.s, ...erradas.sort(() => 0.5 - Math.random()).slice(0, 2)];
    opcoes = opcoes.sort(() => Math.random() - 0.5);

    opcoes.forEach(silaba => {
        const div = document.createElement("div");
        div.className = "opcao-silaba";
        div.innerText = silaba;
        div.onclick = () => verificarResposta(silaba);
        container.appendChild(div);
    });
}

async function verificarResposta(escolha) {
    const alvo = document.getElementById("alvo-drop");

    if (escolha === atual.s) {
        alvo.innerText = escolha;
        alvo.className = "acerto";
        if (typeof confetti === 'function') confetti();

        // Sequência: Sílaba -> Palmas -> Próxima Fase
        try {
            const audioSilaba = new Audio(`${PATH_SILABAS}${atual.a}`);
            audioSilaba.onended = () => {
                const somPalmas = new Audio(`${PATH_SISTEMA}palmas.mp3`);
                somPalmas.onended = () => { fase++; carregarFase(); };
                somPalmas.play().catch(() => { fase++; carregarFase(); });
            };
            audioSilaba.play();
        } catch (e) {
            fase++; carregarFase();
        }

    } else {
        alvo.className = "erro";
        if (navigator.vibrate) navigator.vibrate(200);

        // Sílaba errada em minúsculo. Se não existir, o erro é silenciado.
        const somErro = new Audio(`${PATH_SILABAS}${escolha.toLowerCase()}.mp3`);
        somErro.play().catch(e => console.log("Áudio de erro não encontrado, ignorando..."));

        setTimeout(() => { alvo.className = ""; }, 1000);
    }
}

window.onload = iniciar;
