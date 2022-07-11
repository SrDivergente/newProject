const doencasVirais = [
  {
    questao:
      "Existem cinco reinos que dividem os seres vivos: Monera, Protista, Plantae, Fungi e Animalia. Os vírus não estão incluídos em nenhum desses grupos, pois não são considerados seres vivos já que:",
    resposta: "São considerados apenas partículas infecciosas.",
    opcao: [
      "São seres extremamente pequenos.",
      "Nunca foram estudados em laboratório.",
      "São considerados apenas partículas infecciosas.",
      "Têm o tempo de vida muito curto.",
    ],
  },
  {
    questao:
      "(UFRN) Apesar de não saber que a raiva era causada por um vírus, Pasteur realizou vários exper?imentos para desenvolver uma vacina contra essa doença. No experimento inicial, que não deu certo, ele recolheu saliva de cães infectados e a inoculou em um recipiente de vidro (balão) contendo meio de cultura (água e nutrientes). Esse experimento não deu certo porque o vírus:",
    resposta: "é metabolicamente dependente.",
    opcao: [
      "é um microrganismo envelopad",
      "intensificou sua virulência.",
      "atenuou sua patogenicidade.",
      "é metabolicamente dependente.",
    ],
  },
  {
    questao: "(UFRN) Todos os vírus são constituídos por:",
    resposta: "Ácidos nucléicos e proteínas.",
    opcao: [
      "DNA e proteínas.",
      "Aminoácidos e água.",
      "Ácidos nucléicos e proteínas.",
      "DNA e RNA.",
    ],
  },
  {
    questao:
      "Frequentemente, quando uma pessoa está doente, ouvimos a frase: Deve ser apenas uma virose! Entretanto, chamamos de viroses todas as doenças causadas por vírus, que podem variar de uma simples gripe até a AIDS. De acordo com seu conhecimento sobre viroses, marque alternativas em que encontramos apenas doenças causadas por vírus.",
    resposta: "Hepatite, raiva e caxumba.",
    opcao: [
      "Hepatite, raiva e caxumba.",
      "Hepatite, dengue e cólera.",
      "Raiva, dengue e gonorreia.",
      "Dengue, herpes e tétano.",
    ],
  },
  {
    questao:
      "O HIV é um exemplo de vírus envelopado. Marque a alternativa que explica corretamente essa definição.",
    resposta: "São vírus envolvidos por um envelope lipoproteico.",
    opcao: [
      "São vírus envolvidos por um envelope proteico.",
      "São vírus envolvidos por uma parede celular.",
      "São vírus envolvidos por um envelope lipoproteico.",
      "São vírus com um envelope quitinoso.",
    ],
  },
  {
    questao: "Como se denomina o tipo de vírus que ataca bactérias?",
    resposta: "Bacteriófago",
    opcao: [
      "Intracelular obrigatório.",
      "Bactericida",
      "Bacteriose.",
      "Bacteriófago",
    ],
  },
  {
    questao:
      "Os vírus são minúsculos 'piratas' biológicos porque invadem as células, saqueiam seus nutrientes e utilizam as reações químicas das mesmas para se reproduzir. Logo em seguida os descendentes dos invasores transmitem-se a outras células, provocando danos devastadores. A estes danos, dá-se o nome de virose, como a raiva, a dengue hemorrágica, o sarampo, a gripe, etc. De acordo com o texto, é correto afirmar:",
    resposta: "Os vírus não têm metabolismo próprio.",
    opcao: [
      "Os vírus utilizam o seu próprio metabolismo para destruir células, causando viroses.",
      "Os vírus utilizam o DNA da célula hospedeira para produzir outros vírus.",
      "Os vírus não têm metabolismo próprio.",
      "As viroses são transcrições genéticas induzidas pelos vírus que degeneram a cromatina na célula hospedeira.",
    ],
  },
  {
    questao:
      "As estruturas presentes em uma célula vegetal, porém ausentes em uma bactéria, são:",
    resposta: "cloroplastos, mitocôndrias, núcleo e retículo endoplasmático.",
    opcao: [
      "Cloroplastos, lisossomos, núcleo e membrana plasmática.",
      "vacúolos, cromossomos, lisossomos e ribossomos.",
      "complexo golgiense, membrana plasmática, mitocôndrias e núcleo.",
      "cloroplastos, mitocôndrias, núcleo e retículo endoplasmático.",
    ],
  },
  {
    questao: "(FATEC-SP) Assinale a alternativa correta.",
    resposta:
      " As bactérias reproduzem-se, geralmente, por divisão binária, uma forma assexuada de reprodução pela qual uma única bactéria pode originar um 'clone', ou seja, uma população de bactérias idênticas.",
    opcao: [
      "As bactérias reproduzem-se, geralmente, por divisão binária, uma forma assexuada de reprodução pela qual uma única bactéria pode originar um 'clone', ou seja, uma população de bactérias idênticas.",
      "As bactérias e as algas cianofíceas distinguem-se de todos os outros seres vivos porque não possuem carioteca envolvendo o material nuclear, isto é, são eucariontes.",
      "As bactérias só vivem isoladas, embora próximas; nunca formam colônias.",
      "Em algumas espécies de bactérias, observa-se o fenômeno da conjugação, isto é, um tipo de reprodução assexuada.",
    ],
  },
  {
    questao:
      "(UFMG) – Em que alternativa as duas características são comuns a todos os indivíduos do reino Monera?",
    resposta: "h",
    opcao: [
      "Ausência de núcleo, presença de clorofila.",
      "Ausência de carioteca, capacidade de síntese proteica.",
      "Incapacidade de síntese proteica, parasitas exclusivos.",
      "Presença de um só tipo de ácido nucleico, ausência de clorofila.",
    ],
  },
  {
    questao:
      "(PUC- RJ/2007) – Durante um exame de uma criança enferma, o médico explica aos pais que o paciente tem uma doença causada por um organismo, unicelular, procarionte e que pode ser combatido com uso de medicamento conhecido genericamente como um antibiótico. O médico descreveu um organismo classificado como:",
    resposta: "h",
    opcao: ["Fungi.", " Animal.", " Monera.", " Vírus."],
  },
  {
    questao:
      "As bactérias podem ser encontradas tanto no solo, quanto na água e, além disso, também podem existir dentro de outros seres vivos numa relação harmoniosa. Entretanto, existem bactérias causadoras de doenças. São exemplos de bacterioses, EXCETO:",
    resposta: "AIDS",
    opcao: ["Botulismo", "Cólera", "AIDS", "Hanseníase"],
  },
];

const body = document.querySelector(".quiz-body");

const voltaMenu = document.querySelector(".voltaMenu");

const novaQuestao = document.getElementById("esteAqui");
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");

let placar = 0;
let q = 0;

const arrayQuestoes = [a, b, c, d];

const botaoPrx = document.querySelector(".proximaQuestao");

doencasVirais.map((e) => {
  e.opcao.sort(() => Math.floor(Math.random() - 0.5));
});
console.log(arrayQuestoes);
doencasVirais.sort(() => Math.floor(Math.random() - 0.5));

const quizBody = document.querySelector(".quiz-body");
const adiciona = document.querySelector("#botaoAdiciona");

let contas = 0;

function cria() {
  quizBody.style.display = "flex";
  contas++;
  const mais = doencasVirais[contas - 1];
  novaQuestao.textContent = mais.questao;
  mais["opcao"].map((e) => {
    arrayQuestoes.map((elements) => {
      elements.disabled = false;
      if (mais.opcao.indexOf(e) == arrayQuestoes.indexOf(elements)) {
        elements.textContent = e;
      }
      if (elements.textContent == "") {
        elements.textContent = mais.resposta;
      }
    });
  });
  console.log(mais);
  botaoPrx.style.display = "none";
  voltaMenu.style.display = "none";
}
cria();

function validaAcerto(x) {
  console.log(x);
  r = doencasVirais[q].resposta;
  if (x == r) {
    toastr.success("Parabéns, você acertou!");
    arrayQuestoes.map((e) => {
      e.disabled = true;
    });
    placar++;
  } else {
    toastr.error("Você Errou!");
    arrayQuestoes.map((e) => {
      e.disabled = true;
    });
  }
  q += 1;
  if (q == 4) {
    console.log("acabou");
    toastr.error("Você Errou!");
    arrayQuestoes.map((e) => {
      e.disabled = true;
    });
    voltaMenu.style.display = "block";
    criaResultado();
  } else {
    botaoPrx.style.display = "block";
  }
}

function proximaQuestao() {
  cria();
}

function criaResultado() {
  body.innerHTML = "";
  const divDoPlacar = document.createElement("div");
  divDoPlacar.classList.add("divPLacar");
  divDoPlacar.innerText = `Você marcou ${placar}`;
  body.appendChild(divDoPlacar);
}

console.log(doencasVirais);
