import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

// DADOS DOS PLANOS DE AULA
const lessonPlans = [
  {
    title: 'Contação de História',
    link: '/docs/contacao',
    imageUrl: '/img/contacao-historias.jpg',
    targetAudience: '1º e 2º Ano',
    description: 'Combine a magia da leitura com a personalização do livro digital em uma atividade completa e interativa.',
  },
  {
    title: 'Laboratório de Informática',
    link: '/docs/laboratorio',
    imageUrl: '/img/plano-de-aula-laboratorio-o-nome-da-gente.jpg',
    targetAudience: 'EF e 1º Ano',
    description: 'Leitura e personalização do livro O Nome da Gente em uma atividade no laboratório de informática.',
  },
  {
    title: 'Leitura em Família',
    link: '/docs/emfamilia',
    imageUrl: '/img/topo-proposta-leitura-em-familia.jpg',
    targetAudience: 'EF e 1º Ano',
    description: 'Incentiva o hábito de leitura e a participação da família no processo de alfabetização.',
  },
];


// COMPONENTES DA PÁGINA
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={useBaseUrl("/img/capa-o-nome-da-gente.png")} width={200} height="auto" />
        <Heading as="h1" className="hero__title">
          
          {siteConfig.title}
        </Heading>
      </div>
    </header>
  );
}

function LessonPlanSection() {
  
  return (
    <section className={styles.lessonPlansSection}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            Este site apresenta três situações didáticas elaboradas para o trabalho com o livro <b>O Nome da Gente</b>. Voltadas a crianças da Educação Infantil e dos 1º e 2º anos do Ensino Fundamental, as propostas foram pensadas para apoiar a apropriação do sistema de escrita alfabética e contribuir para a formação de leitores.
          </div>
          <div className="col col--6">
            O trabalho com o nome próprio é amplamente reconhecido como uma estratégia potente para a reflexão sobre o Sistema de Escrita, pois oferece às crianças uma referência estável e significativa — uma fonte segura de informação sobre como a linguagem escrita funciona.
          </div>

        
        </div>
        <Heading as="h2" className={clsx('text--center', styles.sectionTitle)}>
            Encantar e alfabetizar com o nome próprio: três propostas práticas
        </Heading>
        <div className="row">
          {lessonPlans.map((plan) => (
            <div key={plan.title} className="col col--4">
              <div className={styles.lessonCard}>
                <div className={styles.lessonCardImageWrapper}>
                  <img src={useBaseUrl(plan.imageUrl)} alt={plan.title} className={styles.lessonCardImage} />
                  <span className={styles.lessonCardTag}>{plan.targetAudience}</span>
                </div>
                <div className={styles.lessonCardContent}>
                  <Heading as="h3">{plan.title}</Heading>
                  <p>{plan.description}</p>
                  <Link
                    className="button button--primary button--block"
                    to={plan.link}>
                    Acessar Roteiro
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
    return(
        <section className={styles.whySection}>
            <div className="container">
                <div className="row">
                    <div className="col col--4">
                        <Heading as="h2">Sobre o livro <i>O Nome da Gente</i></Heading>
                        <p><i>O Nome da Gente</i> é um livro exclusivo e personalizável que incentiva a criança a reconhecer seu nome escrito, explorar letras, sons e combinações, e perceber semelhanças com outras palavras. Ao envolver ativamente a família, o livro fortalece o vínculo entre leitura, afeto e aprendizagem, criando um ambiente lúdico e acolhedor para a formação de leitores e escritores.</p>
                    </div>
                    <div className="col col--8">
                        <div className="row">
                            <div className="col col--6">
                                <h4>💬 Nome próprio como Ponto de partida</h4>
                                <p>Os nomes próprios são um recurso valioso para que as crianças compreendam o funcionamento do sistema de escrita.</p>
                            </div>
                            <div className="col col--6">
                                <h4>🧒 Individualização e Identidade</h4>
                                <p>O nome próprio individualiza e representa a identidade de uma pessoa, e aprender a escrevê-lo é uma conquista significativa.</p>
                            </div>                            
                            <div className="col col--6">
                                <h4>💖 Valor social e Afetivo</h4>
                                <p>O nome próprio possui valor social e afetivo para as crianças, o que torna as atividades com ele mais significativas e contextualizadas.</p>
                            </div> 
                            <div className="col col--6">
                                <h4>👩‍🏫 Papel do educador</h4>
                                <p>O educador tem papel fundamental ao apresentar e incentivar o uso dos nomes próprios como uma fonte segura de informação sobre como a linguagem escrita funciona.</p>
                            </div>
                            <div className="col col--6">
                                <h4>🔤 Sistema de Escrita Alfabética</h4>
                                <p>Nomes próprios são considerados palavras estáveis, ou seja, não variam em gênero, número ou grau, o que os torna um recurso didático relevante para a reflexão sobre o SEA.</p>
                            </div>
                            <div className="col col--6">
                                <h4>🤝 Interação e Trocas produtivas</h4>
                                <p>A organização de atividades com nomes próprios em duplas ou pequenos grupos potencializa a interação e o intercâmbio de saberes entre as crianças.</p>
                            </div>                            
                            <div className="col col--6">
                                <h4>🧩 Escrita com sentido</h4>
                                <p>A escrita e a leitura de nomes próprios possuem um sentido claro e cotidiano no ambiente escolar. Esse uso contextualizado torna a aprendizagem mais significativa e demonstra que a linguagem escrita serve a um propósito social.</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// PÁGINA PRINCIPAL
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Página Inicial"
      description="Planos de aula e roteiros pedagógicos para o livro O Nome da Gente. Explore atividades de alfabetização, identidade e tecnologia para Educação Infantil e Ensino Fundamental.">
      <HomepageHeader />
      <main>
        <LessonPlanSection />
        <WhySection />
      </main>
    </Layout>
  );
}