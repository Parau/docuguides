import React, { useEffect, useRef, useState } from 'react';
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
  const markmapSvgRef = useRef<SVGSVGElement>(null);
  const markmapInstanceRef = useRef<any>(null);
  const [mindmapMarkdown, setMindmapMarkdown] = useState<string>('');

  useEffect(() => {
    fetch('./indice/indice.txt')
      .then(res => res.text())
      .then(setMindmapMarkdown);
  }, []);

  useEffect(() => {
    if (!mindmapMarkdown) return;
    let mm: any;
    let cleanup = () => {};
    let resizeHandler = () => {};

    import('markmap-view').then(({ Markmap }) => {
      import('markmap-lib').then(({ Transformer }) => {
        if (!markmapSvgRef.current) return;
        const transformer = new Transformer();
        mm = Markmap.create(markmapSvgRef.current);
        markmapInstanceRef.current = mm;
        const { root, frontmatter } = transformer.transform(mindmapMarkdown);
        mm.setData(root, frontmatter?.markmap).then(() => mm.fit());

        // Add resize handler
        resizeHandler = () => {
          mm?.fit?.();
        };
        window.addEventListener('resize', resizeHandler);

        cleanup = () => {
          window.removeEventListener('resize', resizeHandler);
          mm?.destroy?.();
        };
      });
    });
    return () => {
      cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mindmapMarkdown]);

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

          <div style={{ width: '100%', minHeight: 400, margin: '2rem 0' }}>
            <svg
              ref={markmapSvgRef}
              style={{ width: '90%', minHeight: 400 }}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}


