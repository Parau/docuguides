import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './nologin.module.css';
import { useLocation } from '@docusaurus/router';

/**
 * Page displayed when a non-authenticated user tries to access protected content.
 */
export default function NoLogin() {
  const location = useLocation();
  const from = new URLSearchParams(location.search).get('from');
  const loginUrl = `https://criatividade.digital/login?redirect=${encodeURIComponent(
    from || '/',
  )}`;

  return (
    <Layout
      title="Acesso Restrito"
      description="Página de aviso para conteúdo protegido que requer autenticação.">
      <main className={styles.noLoginContainer}>
        <div className={styles.noLoginBox}>
          <Heading as="h1">Acesso Restrito</Heading>
          <p>
            O conteúdo que você está tentando acessar{' '}
            {from && <code>{from}</code>}
            {' '}é protegido.
          </p>
          <p>
            Para continuar, por favor, faça o login e verifique se seu acesso foi liberado.
          </p>
          <a
            className="button button--primary button--lg"
            href={loginUrl}>
            Fazer Login
          </a>
        </div>
      </main>
    </Layout>
  );
}