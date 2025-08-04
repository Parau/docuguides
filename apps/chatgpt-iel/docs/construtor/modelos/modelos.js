export const gpt4o = {
  id: "GPT-4o",
  inteligencia: { pontuacao: 3, subtexto: "Alta" },
  velocidade: { pontuacao: 3, subtexto: "Média" },
  custo: { valor: "$5 • $15", subtexto: "Entrada • Saída" },
  entrada: { tipos: ["texto", "imagem"], subtexto: "Texto, imagem" },
  saida: { tipos: ["texto"], subtexto: "Texto" },
};

export const o3 = {
  id: "o3",
  raciocinio: { pontuacao: 5, subtexto: "Mais alta" },
  velocidade: { pontuacao: 1, subtexto: "Mais lenta" },
  custo: { valor: "$2 • $8", subtexto: "Entrada • Saída" },
  entrada: { tipos: ["texto", "imagem"], subtexto: "Texto, imagem" },
  saida: { tipos: ["texto"], subtexto: "Texto" },
};

export const o4mini = {
  id: "o4-mini",
  raciocinio: { pontuacao: 4, subtexto: "Mais alta" },
  velocidade: { pontuacao: 2, subtexto: "Média" },
  custo: { valor: "$1.1 • $4.4", subtexto: "Entrada • Saída" },
  entrada: { tipos: ["texto", "imagem"], subtexto: "Texto, imagem" },
  saida: { tipos: ["texto"], subtexto: "Texto" },
};

export const gpt45 = {
  id: "GPT-4.5",
  inteligencia: { pontuacao: 4, subtexto: "Mais alta" },
  velocidade: { pontuacao: 3, subtexto: "Média" },
  custo: { valor: "$75 • $150", subtexto: "Entrada • Saída" },
  entrada: { tipos: ["texto", "imagem"], subtexto: "Texto, imagem" },
  saida: { tipos: ["texto"], subtexto: "Texto" },
};

export const gpt41 = {
  id: "GPT-4.1",
  inteligencia: { pontuacao: 4, subtexto: "Mais alta" },
  velocidade: { pontuacao: 3, subtexto: "Média" },
  custo: { valor: "$2 • $18", subtexto: "Entrada • Saída" },
  entrada: { tipos: ["texto", "imagem"], subtexto: "Texto, imagem" },
  saida: { tipos: ["texto"], subtexto: "Texto" },
};

export const gpt41mini = {
  id: "GPT-4.1 mini",
  inteligencia: { pontuacao: 3, subtexto: "Alta" },
  velocidade: { pontuacao: 4, subtexto: "Rápida" },
  custo: { valor: "$0.4 • $1.6", subtexto: "Entrada • Saída" },
  entrada: { tipos: ["texto", "imagem"], subtexto: "Texto, imagem" },
  saida: { tipos: ["texto"], subtexto: "Texto" },
};

/*
https://platform.openai.com/docs/models/compare
https://platform.openai.com/docs/models/gpt-4o
https://platform.openai.com/docs/models/o3
https://platform.openai.com/docs/models/o4-mini
https://platform.openai.com/docs/models/gpt-4.5-preview
https://platform.openai.com/docs/models/gpt-4.1
https://platform.openai.com/docs/models/gpt-4.1-mini

https://help.openai.com/en/articles/7864572-what-is-the-chatgpt-model-selector#h_16de5e67ac
https://help.openai.com/en/articles/10658365-gpt-45-in-chatgpt
https://openai.com/pt-BR/index/introducing-o3-and-o4-mini/

https://venturebeat.com/ai/openai-moves-forward-with-gpt-4-5-deprecation-in-api-triggering-developer-anguish-and-confusion/
*/