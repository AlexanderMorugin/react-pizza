import { Header } from './components/header';
import { SortBar } from './components/sort-bar';
import Card from './components/card';
import style from './app.module.scss';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <SortBar />
      <Card />
    </div>
  );
}

export default App;
