import Link from 'next/link';

import { TiWarningOutline } from 'react-icons/ti';
import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css';
export default function NotFound() {
  return (
    <Layout title='Page not found'>
      <div>
        <h1 className={styles.error}>
          <TiWarningOutline />
          404!
        </h1>
        <h4>Page you are looking is not here.</h4>
        <Link href='/'> Go to home</Link>
      </div>
    </Layout>
  );
}
