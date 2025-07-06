import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './nologin.module.css';
import { useLocation } from '@docusaurus/router';
import { useAuth } from '../firebase/Auth';

/**
 * Page displayed when an authenticated user tries to access content they do not have permission for.
 */
export default function NoLoginContent() {
  const location = useLocation();
  const from = new URLSearchParams(location.search).get('from');
  const { user } = useAuth();

  return (
    <Layout
      title="Acesso Negado"
      description="Página de aviso para conteúdo que o usuário não tem permissão para acessar.">
      <main className={styles.noLoginContainer}>
        <div className={styles.noLoginBox}>
          <Heading as="h1">Acesso Negado</Heading>
          <p>
            O conteúdo que você está tentando acessar{' '}
            {from && <code>{from}</code>}
            {' '}é protegido.
          </p>
          {user ? (
            <p>
              Você está logado como <strong>{user.email}</strong>, mas não tem
              permissão para visualizar este conteúdo.
            </p>
          ) : (
            <p>Verificando suas permissões...</p>
          )}
          <Link
            className="button button--primary button--lg"
            to="/">
            Voltar para a Página Inicial
          </Link>
        </div>
      </main>
    </Layout>
  );
}