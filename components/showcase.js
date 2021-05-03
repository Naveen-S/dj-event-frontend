import styles from '@/styles/showcase.module.css';
export default function ShowCase() {
  return (
    <div className={styles.container}>
      <h1 className='font-extrabold text-3xl'>Welcome to the Party!</h1>
      <h4 className='text-sm'> Hottest DJ party ever!</h4>
    </div>
  );
}
