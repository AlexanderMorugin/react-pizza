import Cards from '../../components/ui/cards';
import Header from '../../components/ui/header';
import SortBar from '../../components/ui/sort-bar';

import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <SortBar />
      <Cards />
    </div>
  );
};

export default App;
