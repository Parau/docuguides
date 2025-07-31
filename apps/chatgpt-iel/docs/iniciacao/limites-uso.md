# Limites de Uso
Atualmente, não existe um painel centralizado que mostre, de forma clara, quanto da sua cota de uso já foi consumido nos diferentes recursos do ChatGPT. Algumas informações aparecem no próprio menu de ferramentas, por exemplo, ao clicar em Ferramentas e passar o mouse sobre recursos como Investigar ou Modo Agente, é possível visualizar breves descrições sobre limites de uso. No entanto, para muitos outros recursos, não há qualquer indicação direta de consumo disponível ao usuário.

Em alguns casos, o próprio ChatGPT informa durante a conversa que o limite de uso de determinado recurso está se aproximando ou que ele já foi atingido (o que pode interromper temporariamente o acesso àquela funcionalidade 😞).

:::info
Os planos **Team** e **Enterprise** possuem a possibilidade de aquisição de pacotes de crédito adicionais para expandir os limites de uso. Para mais informações, consulte a [documentação oficial da OpenAI](https://help.openai.com/en/articles/11487671-flexible-pricing-for-the-enterprise-and-team-plan).
:::

Cada recurso tem seu próprio ciclo de renovação de cota, que pode ser diário, semanal ou mensal. A própria documentação oficial da OpenAI também informa que, em momentos de alta demanda, os limites podem ser temporariamente ajustados — geralmente para manter a estabilidade da plataforma.

Por esses motivos, é difícil manter uma tabela fixa e confiável com os limites atualizados de cada funcionalidade, já que essas informações estão sujeitas a mudanças frequentes e nem sempre são publicadas de forma clara e oficial.

Para montar a tabela a seguir, usei um caminho alternativo: pedir ao próprio ChatGPT que buscasse e analisasse as informações mais atualizadas disponíveis na internet. Apesar de esse método não garantir 100% de precisão, ele é útil para dar uma boa noção geral do que está disponível atualmente — e o próprio grau de confiabilidade de cada dado foi incluído na tabela.

A seguir, você confere a tabela gerada com base neste *prompt*:

```
Sua tarefa é buscar na internet e analisar as informações mais atuais sobre os limites de uso para assinantes dos planos **ChatGPT Free**, **ChatGPT Plus** e **ChatGPT Team**.

Busque especificamente por:
* Limites de interações com as ferramentas e modelos, incluindo criar imagem, investigar, modo agente, sora, codex, etc.
* Periodicidade de renovação da quota.

Ao compilar os dados, crie uma tabela clara e organizada com as seguintes colunas:
1. **Recurso/Ferramenta:** O nome do recurso (ex: GPT-4o, Investigar, Modo Agente).
2. **Plano Free:** O limite de uso para este recurso no plano Plus e a periodicidade de renovação da quota (ex: 40 mensagens a cada 3 horas, 100 mensagens por semana, 10 consultas por mês).
3. **Plano Plus:** O limite de uso para este recurso no plano Plus e a periodicidade de renovação da quota.
4. **Plano Team:** O limite de uso para este recurso no plano Plus e a periodicidade de renovação da quota.
6. **Grau de Confiabilidade:** Uma classificação (Alta, Média, Baixa) baseada na credibilidade da fonte (ex: um blog não oficial tem confiabilidade menor que o site oficial da OpenAI).
```
## Tabela gerada pelo ChatGPT
Aqui está uma versão atualizada e organizada dos limites de uso dos planos ChatGPT **Free**, **Plus** e **Team**, com foco nos recursos solicitados. Os dados foram coletados em junho/julho de 2025 a partir de fontes oficiais (Central de Ajuda da OpenAI) e relatório da imprensa especializada:

| **Recurso / Ferramenta**                                            | **Plano Free**                                                                                                                                                             | **Plano Plus**                                                                                                                                                 | **Plano Team**                                                                                | **Grau de Confiabilidade**                 |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **GPT‑4o (texto, imagem, voz)**                                     | Limitado a (\~10 mensagens por 3h) com janela de renovação a cada \~3 horas ([OpenAI Help Center][1], [Comunidade OpenAI][2])                                              | Até \~40–80 mensagens por 3h (tipicamente 40) ([Comunidade OpenAI][3], [Comunidade OpenAI][4])                                                                 | Aproximadamente 160 mensagens por 3 h (mais que Plus) ([Comunidade OpenAI][3], [Reddit][5])   | Média a Alta (fonte comunitária + oficial) |
| **Modelos o3 / o4-mini / o4-mini-high**                             | Usuários Free obtêm acesso ao o3‑mini com limite similar ao do GPT‑4o ([The Verge][6], [OpenAI Help Center][1])                                                            | 100 mensagens/semana com o3; 300 mensagens/dia com o4‑mini; 100 mensagens/dia com o4‑mini‑high ([OpenAI Help Center][7], [Reddit][5])                          | Mesmos limites que Plus (100/semana, 300/dia, 100/dia) ([OpenAI Help Center][7], [Reddit][5]) | Alta (central de ajuda oficial)            |
| **Deep Research (modo agente de pesquisa)**                         | 5 usos por mês de versão "lightweight" (o4‑mini) ([Wikipedia][8], [TechRadar][9])                                                                                          | 10 usos/mês da versão completa + 15 “lightweight” adicionais (= 25 total) ([Wikipedia][8], [TechRadar][9])                                                     | 10 usos completas + 15 “lightweight” por mês (igual ao Plus) ([Wikipedia][8], [TechRadar][9]) | Alta                                       |
| **ChatGPT Agent (modo agente executável)**                          | — (não disponível no Free)                                                                                                                                                 | 40 mensagens por mês (quota renovada a cada mês) ([OpenAI Help Center][10])                                                                                    | 40 mensagens por mês ou 30 créditos/mensagem se cobrar flexível ([OpenAI Help Center][10])    | Alta                                       |
| **Envio de arquivos/imagens / ferramentas do plugin / codex, etc.** | Rate limits específicos separados; Free pode usar upload de arquivos, imagem e criação de imagem liberamente até esgotar (quota não explicitada) ([OpenAI Help Center][1]) | Plus e Team têm limites compartilhados, ex: DALL‑E 3 cerca de 20 prompts por 3 h em picos, file upload até 20 arquivos de até 512 MB ([Comunidade OpenAI][11]) | Mesmos limites que Plus para plugins, DALL-E, uploads ([Comunidade OpenAI][11])               | Média (comunidade + Help Center)           |
| **Sora (gerador de vídeo)** | Não disponível |  Até 50 gerações de vídeo padrão por mês (720p, \~5 s); acesso “relaxed queue” ilimitado ocasionalmente permitidos; termos limitam uso abusivo ([de.wikipedia.org][12], [OpenAI Help Center][13], [tomsguide.com][15])      | Acesso generoso conforme plano Team; limites maiores que Plus; (sem cota exata pública) ([12])      |  Alta (oficial + imprensa) |
| **Codex (agente de codificação)** | Não disponível |  Preview inicial com acesso generoso (não divulgado limite exato ainda); comunidade relata uso de \~25 tarefas sem atingir limite ([theverge.com][15])        | Disponível no plano Team com mesmo acesso preview; aberta também para Enterprise e Pro ([theverge.com][15])   |  Média (preview oficial + comunidade)   |

## ✅ Observações importantes

* **GPT‑4o** é gratuito, mas com limites severos para usuários Free (\~10 mensagens por janela de \~3 h); Plus tem \~40‑80 prompts/3 h; Team tem até cerca de 160/3 h ([OpenAI Help Center][1]).
* **Modelos o3 / o4-mini / o4-mini-high** estão acessíveis a todos os planos pagos com cotas específicas: em Plus/Team há 100/semana (o3) e 300/dia (o4‑mini), 100/dia para o4‑mini‑high ([OpenAI Help Center][7]).
* O **modo Deep Research** possui uma versão “lightweight” liberada para Free (5 usos/mês); Plus e Team têm 10 consultas completas + até 15 leves por mês, totalizando \~25; Pro maior, Enterprise 10 completas ([Wikipedia][8]).
* Sora: ChatGPT Plus inclui até 50 gerações mensais de vídeos padrão (720p, 5 s), com acesso ilimitado ocasional via fila relaxada; Team oferece acesso mais amplo, mas sem cota pública clara.
* Codex: Lançado como pré‑visualização em maio de 2025 e inicialmente com acesso generoso em Plus e Team; limites ainda não publicados, embora relatos comunitários indiquem cerca de 25 tarefas sem esgotar cota.
* O **ChatGPT Agent**, lançado em julho de 2025, está disponível apenas para Plus e Team com limite de 40 mensagens/mês ([OpenAI Help Center][10]).
* Para uploads de arquivos, plugins, criação de imagens e ferramentas como Codex: os limites são citados em central de ajuda ou comunidade (ex: DALL‑E 3: \~20 prompts/3h em picos; existindo limites de envio de arquivos) porém não há exatamente uma quota pública exata listada para Free vs. Plus/Team ([Comunidade OpenAI][11]).

## 🧾 Grau de confiabilidade das fontes

* Fontes como a **Central de Ajuda da OpenAI** e FAQ oficiais (chat.openai.com/help e artigos) receberam grau **Alta**.
* Relatórios da imprensa especializada (The Verge, TechRadar) apoiam dados oficiais e foram usados como secundários.
* Informações vindas de fóruns e comunidade oficial da OpenAI têm grau **Média**, utilizadas quando complementam o suporte oficial.
* Não foram encontradas fontes de confiança baixa relacionadas a esse tema.

[1]: https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq?utm_source=chatgpt.com "ChatGPT Free Tier FAQ - OpenAI Help Center"
[2]: https://community.openai.com/t/the-perception-of-free-usage-gpt-4o/1172502?utm_source=chatgpt.com "The perception of free usage (GPT 4o) - ChatGPT"
[3]: https://community.openai.com/t/chatgpt-plus-4o-usage-cap/777327?utm_source=chatgpt.com "ChatGPT Plus 4o usage cap - OpenAI Developer Community"
[4]: https://community.openai.com/t/whys-gpt-4o-insanely-limited-to-free-users-and-even-plus-users-it-literally-barely-gives-you-5-messages-in-5-6-hours-to-the-free-users/769852?utm_source=chatgpt.com "Why's GPT 4o insanely limited to free users and even plus users? It ..."
[5]: https://www.reddit.com/r/OpenAI/comments/1k6jfxk/here_are_the_new_limits_for_plus/?utm_source=chatgpt.com "Here are the new limits for Plus : r/OpenAI - Reddit"
[6]: https://www.theverge.com/news/603849/openai-o3-mini-launch-chatgpt-api-available-now?utm_source=chatgpt.com "OpenAI launches new o3-mini reasoning model with a free ChatGPT version"
[7]: https://help.openai.com/en/articles/9824962-openai-o3-and-o4-mini-usage-limits-on-chatgpt-and-the-api?utm_source=chatgpt.com "OpenAI o3 and o4-mini Usage Limits on ChatGPT and the API"
[8]: https://en.wikipedia.org/wiki/ChatGPT_Deep_Research?utm_source=chatgpt.com "ChatGPT Deep Research"
[9]: https://www.techradar.com/computing/artificial-intelligence/free-chatgpt-users-are-finally-getting-deep-research-access-from-today-but-there-are-restrictions?utm_source=chatgpt.com "ChatGPT's best tool is now available for free - but there's a catch"
[10]: https://help.openai.com/en/articles/11752874-chatgpt-agent?utm_source=chatgpt.com "ChatGPT agent - OpenAI Help Center"
[11]: https://community.openai.com/t/chatgpt-plus-user-limits-valid-for-2025/1149656?utm_source=chatgpt.com "ChatGPT Plus User Limits, valid for 2025"
[12]: https://de.wikipedia.org/wiki/Sora_%28K%C3%BCnstliche_Intelligenz%29?utm_source=chatgpt.com "Sora (Künstliche Intelligenz)"
[13]: https://help.openai.com/en/articles/10245774-sora-billing-faq?utm_source=chatgpt.com "Sora - Billing FAQ - OpenAI Help Center"
[14]: https://www.tomsguide.com/ai/chatgpt/openai-just-gave-chat-gpt-plus-users-unlimited-access-to-sora-but-theres-a-catch?utm_source=chatgpt.com "OpenAI just gave ChatGPT Plus users unlimited access to Sora"
[15]: https://www.theverge.com/command-line-newsletter/668251/chatgpt-is-getting-an-ai-coding-agent?utm_source=chatgpt.com "ChatGPT is getting an AI coding agent"
