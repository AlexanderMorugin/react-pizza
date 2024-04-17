import { Route, Routes } from 'react-router';

import Header from '../../components/header';
import MainPage from '../../pages/MainPage/MainPage';
import CartPage from '../../pages/CartPage/CartPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
