import React from 'react';

// Importe todos os seus SVGs
import ReasoningSVG from "./reasoning.svg";
import InteligenciaSVG from "./inteligencia.svg";
import SpeedSVG from "./speed.svg";
import TextSVG from "./text.svg";
import ImageSVG from "./image.svg";

// Importe o arquivo CSS
import './TabelaModelo.css';

// Mapa de ícones para Entrada/Saída. Fica fora do componente para não ser recriado.
const iconMap = {
  texto: <TextSVG />,
  imagem: <ImageSVG />,
};

/**
 * Renderiza uma tabela de especificações para um único modelo de IA.
 * Adapta-se dinamicamente se o modelo usa 'inteligencia' ou 'raciocinio'.
 * @param {{ modelo: object }} props - O objeto contendo os dados do modelo a ser exibido.
 */
function TabelaModeloLLM({ modelo }) {
  // Etapa de segurança: se nenhum modelo for passado, não renderiza nada.
  if (!modelo) {
    return null;
  }

  // --- Lógica Dinâmica para a Primeira Coluna (ATUALIZADO) ---
  const tipoAvaliacao = modelo.inteligencia !== undefined ? 'inteligencia' : 'raciocinio';
  const avaliacaoObj = modelo.inteligencia || modelo.raciocinio;
  
  const pontuacaoAvaliacao = avaliacaoObj?.pontuacao ?? 0;
  const subtextoAvaliacao = avaliacaoObj?.subtexto; // Será undefined se não existir
  
  const rotuloCabecalho = tipoAvaliacao === 'inteligencia' ? 'Inteligência' : 'Raciocínio';
  const IconeAvaliacao = tipoAvaliacao === 'inteligencia' ? InteligenciaSVG : ReasoningSVG;

  // --- Lógica para Velocidade (ATUALIZADO) ---
  const pontuacaoVelocidade = modelo.velocidade?.pontuacao ?? 0;
  const subtextoVelocidade = modelo.velocidade?.subtexto; // Será undefined se não existir

  return (
    <table className="custom-table w-full text-center border border-solid border-gray-200 rounded-lg">
      <thead>
        {/* O cabeçalho não precisa de alterações, pois já usa variáveis dinâmicas */}
        <tr className="border-b border-solid border-gray-200">
          <th className="px-3 py-1 font-semibold border-r border-solid border-gray-200">{rotuloCabecalho}</th>
          <th className="px-3 py-1 font-semibold border-r border-solid border-gray-200">Velocidade</th>
          <th className="px-3 py-1 font-semibold border-r border-solid border-gray-200">Entrada</th>
          <th className="px-3 py-1 font-semibold">Saída</th>
          <th className="px-3 py-1 font-semibold border-r border-solid border-gray-200 coluna-custo">Custo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* Coluna de Inteligência / Raciocínio (ATUALIZADO) */}
          <td className="p-3 border-r border-solid border-gray-200">
            <div className="flex flex-col items-center justify-center h-full">
              <span className="flex flex-row gap-1 justify-center">
                {Array.from({ length: pontuacaoAvaliacao }).map((_, index) => (
                  <IconeAvaliacao key={index} />
                ))}
              </span>
              {/* Renderiza o subtexto apenas se ele existir nos dados */}
              {subtextoAvaliacao && (
                <div className="text-xs text-gray-400 mt-1">{subtextoAvaliacao}</div>
              )}
            </div>
          </td>
          
          {/* Coluna de Velocidade (ATUALIZADO) */}
          <td className="p-3 border-r border-solid border-gray-200">
            <div className="flex flex-col items-center justify-center h-full">
              <span className="flex flex-row gap-1 justify-center">
                {Array.from({ length: pontuacaoVelocidade }).map((_, index) => (
                  <SpeedSVG key={index} />
                ))}
              </span>
              {/* Renderiza o subtexto apenas se ele existir nos dados */}
              {subtextoVelocidade && (
                <div className="text-xs text-gray-400 mt-1">{subtextoVelocidade}</div>
              )}
            </div>
          </td>
         
          {/* Coluna de Entrada */}
          <td className="p-3 border-r border-solid border-gray-200">
            <div className="flex flex-col items-center justify-center h-full">
              <span className="flex flex-row gap-1 justify-center items-center">
                {modelo.entrada.tipos.map((tipo, index) => (
                  <React.Fragment key={index}>{iconMap[tipo]}</React.Fragment>
                ))}
              </span>
              <div className="text-xs text-gray-400 mt-1">{modelo.entrada.subtexto}</div>
            </div>
          </td>
          
          {/* Coluna de Saída */}
          <td className="p-3">
            <div className="flex flex-col items-center justify-center h-full">
              <span className="flex flex-row gap-1 justify-center">
                {modelo.saida.tipos.map((tipo, index) => (
                  <React.Fragment key={index}>{iconMap[tipo]}</React.Fragment>
                ))}
              </span>
              <div className="text-xs text-gray-400 mt-1">{modelo.saida.subtexto}</div>
            </div>
          </td>

          {/* Coluna de Custo */}
          <td className="p-3 border-r border-solid border-gray-200 coluna-custo">
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-lg font-bold">{modelo.custo.valor}</span>
              <div className="text-xs text-gray-400 mt-1">{modelo.custo.subtexto}</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TabelaModeloLLM;