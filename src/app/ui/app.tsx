import { useEffect, useState } from 'react';
import Cards from '../../components/cards';
import Header from '../../components/header';
import SortBar from '../../components/sort-bar';

import styles from './app.module.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    fetch('https://661d23c4e7b95ad7fa6c40f7.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setPizza(data);
          setIsLoading(false);
        }, 5000);
      });
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <SortBar />
      <Cards isLoading={isLoading} pizza={pizza} />
    </div>
  );
};

export default App;
