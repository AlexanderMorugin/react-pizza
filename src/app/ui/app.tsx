import { useEffect } from 'react';
import Cards from '../../components/cards';
import Header from '../../components/header';
import SortBar from '../../components/sort-bar';

import styles from './app.module.scss';

const App = () => {
  useEffect(() => {
    fetch('https://661d23c4e7b95ad7fa6c40f7.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <SortBar />
      <Cards />
    </div>
  );
};

export default App;
