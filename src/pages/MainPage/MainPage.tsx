import { FC, useEffect, useState } from 'react';

import Cards from '../../components/cards';
import SortBar from '../../components/sort-bar';
import axios from 'axios';

const MainPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    axios.get('https://661d23c4e7b95ad7fa6c40f7.mockapi.io/items')
      // .then((res) => console.log(res))
      .then((res) => {
        setTimeout(() => {
          setPizza(res.data);
          setIsLoading(false);
        }, 2000);
      });
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   fetch('https://661d23c4e7b95ad7fa6c40f7.mockapi.io/items')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTimeout(() => {
  //         setPizza(data);
  //         setIsLoading(false);
  //       }, 5000);
  //     });
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <SortBar />
      <Cards isLoading={isLoading} pizza={pizza} />
    </>
  );
};

export default MainPage;
