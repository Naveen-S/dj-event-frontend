import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Layout(props) {
  const { title, keywords, description, children } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.propTypes = {};

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties!',
  description: 'Find the latest DJ and other musical events',
  keywords: 'DJ, EDM, Music',
};