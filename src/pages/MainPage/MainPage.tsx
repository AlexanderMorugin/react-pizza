import { useEffect, useState } from 'react';

import Cards from '../../components/cards';
import SortBar from '../../components/sort-bar';

const MainPage = () => {
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
    <>
      <SortBar />
      <Cards isLoading={isLoading} pizza={pizza} />
    </>
  );
};

export default MainPage;
