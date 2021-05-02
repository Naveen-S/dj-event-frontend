import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import ShowCase from './showcase';

export default function Layout(props) {
  const { title, keywords, description, children } = props;
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header></Header>
      {router?.pathname === '/' && <ShowCase />}
      <div className={styles.container}>{children}</div>
      <Footer></Footer>
    </div>
  );
}

Layout.propTypes = {};

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties!',
  description: 'Find the latest DJ and other musical events',
  keywords: 'DJ, EDM, Music',
};
