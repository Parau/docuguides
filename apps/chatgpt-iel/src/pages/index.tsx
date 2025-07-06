import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import styles from './index.module.css';

/**
 * Generates the main hero section for the homepage.
 */
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Comece aqui!
          </Link>
        </div>
      </div>
    </header>
  );
}

/**
 * Main component for the homepage.
 */
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="A Importância do Nome na Alfabetização"
      description="Explore a proposta deste guia voltado para a alfabetização a partir do nome próprio.">
      <HomepageHeader />
      <main>
        {/* We wrap the content in a container for proper alignment and padding. */}
        <div className="container" style={{padding: '2rem 1rem'}}>
          <section style={{marginBottom: '2rem'}}>
            <Heading as="h2">Sobre este guia</Heading>
            <p>
              Parte do <strong>Projeto Dia Nacional do Livro Infantil</strong>,
              este guia destaca o valor do <em>nome próprio</em> como ponto de
              partida para uma alfabetização significativa. Mais do que letras,
              traz identidade, pertencimento e afeto — essenciais para tornar a
              aprendizagem próxima das crianças.
            </p>
            <p>
              Nosso objetivo é <strong>despertar e fortalecer o gosto pela
              leitura</strong>, promovendo experiências prazerosas com livros
              desde os primeiros anos.
            </p>
          </section>

        </div>
      </main>
    </Layout>
  );
}
