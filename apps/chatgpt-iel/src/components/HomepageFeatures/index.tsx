import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

// Ícones SVG para cada feature. Você pode trocá-los se preferir.
const BookIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19.5C4 18.12 5.12 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.5 2H20v15H6.5C5.12 17 4 15.88 4 14.5v-11C4 2.67 5.12 1.5 6.5 1.5.02 1.5 2H6.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LaptopIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FamilyIcon = () => (
    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L2 12h3v8h14v-8h3L12 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const FeatureList = [
  {
    title: 'Contação de História',
    Icon: BookIcon,
    description: (
      <>
        Um roteiro que combina a leitura do livro impresso com a personalização da versão digital, ideal para familiarizar as crianças com a escrita de forma interativa.
        <br/><br/>
        <Link to="/docs/contacao">Ver o plano de aula &raquo;</Link>
      </>
    ),
  },
  {
    title: 'Atividade no Laboratório de Informática',
    Icon: LaptopIcon,
    description: (
      <>
        Plano focado em guiar os alunos a usar a tecnologia para gerar seu próprio livro, trabalhando a identidade e habilidades digitais desde a pré-escola.
        <br/><br/>
        <Link to="/docs/laboratorio">Ver o plano de aula &raquo;</Link>
      </>
    ),
  },
  {
    title: 'Leitura em Família',
    Icon: FamilyIcon,
    description: (
      <>
        Uma proposta para fortalecer os laços entre escola e família, promovendo um momento de leitura compartilhada que apoia o processo de alfabetização.
        <br/><br/>
        <Link to="/docs/emfamilia">Ver o plano de aula &raquo;</Link>
      </>
    ),
  },
];

function Feature({title, Icon, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon className={styles.featureIcon} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}