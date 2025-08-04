import "./prompt-dicas.css"

# Dicas
*Algumas dicas para a construção de prompts.*

## Evite descrições vagas ou ambíguas
<table>
  <tr>
    <td >❌</td>
    <td className="td-ruim">A descrição deste produto deve ser relativamente curta, com apenas algumas frases, e não muito mais.</td>
    <td rowSpan={2}>A palavra "curto" é muito relativa. O que é "curto"? O mesmo para "algumas". Quantas frases são algumas?</td>
  </tr>
  <tr>
    <td >✅</td>
    <td className="td-bom">Use um parágrafo de 3 a 5 frases para descrever este produto.</td>
  </tr>
</table>

## Refinamento iterativo
A construção de *prompts* geralmente requer uma abordagem iterativa. Comece com um prompt inicial, revise a resposta e refine o prompt com base no resultado. Ajuste a redação, adicione mais contexto ou simplifique a solicitação conforme necessário para aprimorar os resultados.

## Não diga Não 🙃
<table>
  <tr>
    <td >❌</td>
    <td className="td-ruim">Faça um resumo deste artigo sobre computação quântica. Não use jargões técnicos e não seja muito formal.</td>
    <td rowSpan={2}>No lugar de dizer o que não fazer, priorize dizer o que fazer.</td>
  </tr>
  <tr>
    <td >✅</td>
    <td className="td-bom"> Faça um resumo deste artigo sobre computação quântica. Use uma linguagem simples, como se estivesse explicando o conceito para um aluno do ensino médio. O tom deve ser informativo e amigável. </td>
  </tr>
</table>

## Dimensione e priorize suas solicitações
Se sua tarefa for complexa, divida-a em *prompts* menores e mais focados para obter melhor resultados.

## *Prompts* gigantes
Quando construímos prompts muito longos ou complexos, corremos o risco de introduzir ambiguidades e inconsistências. Isso ocorre porque um texto extenso pode incluir várias ideias ou detalhes que podem não estar claramente relacionados.