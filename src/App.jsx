import { Header } from './components/header';
import { SortBar } from './components/sort-bar';
import style from './app.module.scss';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <SortBar />
    </div>
  );
}

export default App;
