import { Outlet } from 'react-router';
import Header from '../../components/header';

import styles from './RootPage.module.scss';

const RootPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
