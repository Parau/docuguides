export const gpt4o = {
  id: "💬 GPT-4o",
  inteligencia: { pontuacao: 3, subtexto: "Elevada" },
  velocidade: { pontuacao: 3, subtexto: "Média" },
  custo: { valor: "$2.5 • $10", subtexto: "Entrada • Saída" },
  entrada: { tipos: ["texto", "imagem"], subtexto: "Texto, imagem" },
  saida: { tipos: ["texto"], subtexto: "Texto" },
  contextWindow: 128000,
  maxOutputTokens: 16384,
  knowledgeCutoff: "2023-09-30"
};
gpt4o.knowledgeCutoffPt = formatDateToPtBR(gpt4o.knowledgeCutoff);
gpt4o.maxOutputTokensPt = formatNumberPtBR(gpt4o.maxOutputTokens);
gpt4o.contextWindowPt = formatNumberPtBR(gpt4o.contextWindow);

export const o3 = {
  id: "🧠 o3",
  raciocinio: { pontuacao: 5, subtexto: "Máximo" },
  velocidade: { pontuacao: 1, subtexto: "Mínima" },
  custo: { valor: "$2 • $8", subtexto: "Entrada • Saída" },
  entrada: { tipos: ["texto", "imagem"], subtexto: "Texto, imagem" },
  saida: { tipos: ["texto"], subtexto: "Texto" },
  contextWindow: 200000,
  maxOutputTokens: 100000,
  knowledgeCutoff: "2024-05-31"
};
o3.knowledgeCutoffPt = formatDateToPtBR(o3.knowledgeCutoff);
o3.maxOutputTokensPt = formatNumberPtBR(o3.maxOutputTokens);
o3.contextWindowPt = formatNumberPtBR(o3.contextWindow);

export const gpt41 = {
  id: "💻 GPT-4.1",
  inteligencia: { pontuacao: 4, subtexto: "Superior" },
  velocidade: { pontuacao: 3, subtexto: "Média" },
  custo: { valor: "$2 • $8", subtexto: "Entrada • Saída" },
  entrada: { tipos: ["texto", "imagem"], subtexto: "Texto, imagem" },
  saida: { tipos: ["texto"], subtexto: "Texto" },
  contextWindow: 1047576,
  maxOutputTokens: 32768,
  knowledgeCutoff: "2024-05-31"
};
gpt41.knowledgeCutoffPt = formatDateToPtBR(gpt41.knowledgeCutoff);
gpt41.maxOutputTokensPt = formatNumberPtBR(gpt41.maxOutputTokens);
gpt41.contextWindowPt = formatNumberPtBR(gpt41.contextWindow);

export const gpt45 = {
  id: "🚫 GPT-4.5",
  inteligencia: { pontuacao: 4, subtexto: "Superior" },
  velocidade: { pontuacao: 3, subtexto: "Média" },
  custo: { valor: "$75 • $150", subtexto: "Entrada • Saída" },
  entrada: { tipos: ["texto", "imagem"], subtexto: "Texto, imagem" },
  saida: { tipos: ["texto"], subtexto: "Texto" },
  contextWindow: 128000,
  maxOutputTokens: 16384,
  knowledgeCutoff: "2023-09-30"
};
gpt45.knowledgeCutoffPt = formatDateToPtBR(gpt45.knowledgeCutoff);
gpt45.maxOutputTokensPt = formatNumberPtBR(gpt45.maxOutputTokens);
gpt45.contextWindowPt = formatNumberPtBR(gpt45.contextWindow);

export const o4mini = {
  id: "o4-mini",
  raciocinio: { pontuacao: 4, subtexto: "Superior" },
  velocidade: { pontuacao: 3, subtexto: "Média" },
  custo: { valor: "$1.1 • $4.4", subtexto: "Entrada • Saída" },
  entrada: { tipos: ["texto", "imagem"], subtexto: "Texto, imagem" },
  saida: { tipos: ["texto"], subtexto: "Texto" },
  contextWindow: 200000,
  maxOutputTokens: 100000,
  knowledgeCutoff: "2024-05-31"
};
o4mini.knowledgeCutoffPt = formatDateToPtBR(o4mini.knowledgeCutoff);
o4mini.maxOutputTokensPt = formatNumberPtBR(o4mini.maxOutputTokens);
o4mini.contextWindowPt = formatNumberPtBR(o4mini.contextWindow);

export const o4minihigh = {
  id: "o4-mini-high",
  raciocinio: { pontuacao: 4, subtexto: "Superior +" },
  velocidade: { pontuacao: 3, subtexto: "Média -" },
  custo: { valor: "$1.1 • $4.4", subtexto: "Entrada • Saída" },
  entrada: { tipos: ["texto", "imagem"], subtexto: "Texto, imagem" },
  saida: { tipos: ["texto"], subtexto: "Texto" },
  contextWindow: 200000,
  maxOutputTokens: 100000,
  knowledgeCutoff: "2024-05-31"
};
o4minihigh.knowledgeCutoffPt = formatDateToPtBR(o4minihigh.knowledgeCutoff);
o4minihigh.maxOutputTokensPt = formatNumberPtBR(o4minihigh.maxOutputTokens);
o4minihigh.contextWindowPt = formatNumberPtBR(o4minihigh.contextWindow);

export const gpt41mini = {
  id: "GPT-4.1 mini",
  inteligencia: { pontuacao: 3, subtexto: "Elevado" },
  velocidade: { pontuacao: 4, subtexto: "Rápida" },
  custo: { valor: "$0.4 • $1.6", subtexto: "Entrada • Saída" },
  entrada: { tipos: ["texto", "imagem"], subtexto: "Texto, imagem" },
  saida: { tipos: ["texto"], subtexto: "Texto" },
  contextWindow: 1047576,
  maxOutputTokens: 32768,
  knowledgeCutoff: "2024-05-31"
};
gpt41mini.knowledgeCutoffPt = formatDateToPtBR(gpt41mini.knowledgeCutoff);
gpt41mini.maxOutputTokensPt = formatNumberPtBR(gpt41mini.maxOutputTokens);
gpt41mini.contextWindowPt = formatNumberPtBR(gpt41mini.contextWindow);

function formatDateToPtBR(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function formatNumberPtBR(number) {
  return Number(number).toLocaleString("pt-BR");
}


/*
Para a tradução dos termos:
| Inglês  | Português alternativo |
| ------- | --------------------- |
| Medium  | Médio                 |
| High    | Elevado               |
| Higher  | Superior              |
| Highest | Máximo                |

| Inglês  | Português sugerido |
| ------- | ------------------ |
| Slowest | Mínima             |
| Slow    | Lenta              |
| Medium  | Média              |
| Fast    | Rápida             |
| Fastest | Máxima             |


https://platform.openai.com/docs/models/compare
https://platform.openai.com/docs/models/gpt-4o
https://platform.openai.com/docs/models/o3
https://platform.openai.com/docs/models/o4-mini
https://platform.openai.com/docs/models/gpt-4.5-preview
https://platform.openai.com/docs/models/gpt-4.1
https://platform.openai.com/docs/models/gpt-4.1-mini

Tem comparador interessante com outros modelos de outras empresas
https://artificialanalysis.ai/models/o4-mini

https://www.datacamp.com/pt/blog/gpt-4-1
https://openai.com/pt-BR/index/introducing-o3-and-o4-mini/

Faz comparativo o4-mini e o4-mini-high

https://help.openai.com/en/articles/7864572-what-is-the-chatgpt-model-selector#h_16de5e67ac
https://help.openai.com/en/articles/10658365-gpt-45-in-chatgpt
https://openai.com/pt-BR/index/introducing-o3-and-o4-mini/

https://venturebeat.com/ai/openai-moves-forward-with-gpt-4-5-deprecation-in-api-triggering-developer-anguish-and-confusion/
*/